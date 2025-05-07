import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";

export interface EntriesProp {
  id: string;
  title: string;
  piece: string;
  date: string;
  author: string;
}

const HomePage = () => {
  const [entries, setEntries] = useState<EntriesProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "entries"));
        const fetchedEntries: EntriesProp[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Omit<EntriesProp, "id">;
          return {
            id: doc.id,
            ...data,
          };
        });

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
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <Body />
    </div>
      
  );
};

export default HomePage;
