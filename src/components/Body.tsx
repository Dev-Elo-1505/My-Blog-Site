import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface EntriesProp {
  id: string;
  title: string;
  subtext: string;
  piece: string;
  date: string;
  author: string;
}

const Body = () => {
  const [entries, setEntries] = useState<EntriesProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "entries"));
        const fetchedEntries: EntriesProp[] = querySnapshot.docs
          .map((doc) => {
            const data = doc.data() as Omit<EntriesProp, "id">;
            return {
              id: doc.id,
              ...data,
            };
          })
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

        setEntries(fetchedEntries);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };
    fetchEntries();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="p-5 text-text bg-primary md:w-3/4">
      <h1 className="text-4xl font-bold mb-5">Recent crashes</h1>
      <div>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="mb-5 hover:bg-secondary p-5 rounded-lg"
          >
            <Link to={`/post/${entry.id}`}>
              <p>
                <span className="text-text-secondary uppercase ">
                  {entry.date}
                </span>
                <span className="italic font-light"> by </span>
                <span className="text-text-secondary uppercase ">
                  {entry.author}
                </span>
              </p>
              <h2 className="text-3xl font-bold">{entry.title}</h2>
              <p className="text-lg italic font-light">{entry.subtext}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
