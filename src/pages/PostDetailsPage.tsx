import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";
import { EntriesProp } from "./HomePage";

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
    <div>
      {Entry && (
        <div>
          <div>{Entry.author}</div>
          <div>{Entry.date}</div>
          <div>{Entry.title}</div>
          <p dangerouslySetInnerHTML={{ __html: Entry.piece }} />
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
