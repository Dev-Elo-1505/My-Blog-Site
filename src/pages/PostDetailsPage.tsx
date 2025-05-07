import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";
import { EntriesProp } from "../components/Body";
import Sidebar from "../components/Sidebar";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [Entry, setEntry] = useState<EntriesProp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      if (!postId) {
        setError(new Error("Post ID is undefined"));
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "entries", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEntry({ id: docSnap.id, ...docSnap.data() } as EntriesProp);
        } else {
          setError(new Error("Document not found"));
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchEntry();
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="p-5 text-text bg-primary">
        {Entry && (
          <div>
            <p>
              <span className="text-text-secondary uppercase ">
                {Entry.date}
              </span>
              <span className="italic font-light"> by </span>
              <span className="text-text-secondary uppercase ">
                {Entry.author}
              </span>
            </p>
            <h1 className="text-5xl font-semibold mb-5">{Entry.title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: Entry.piece }}
              className="text-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailsPage;
