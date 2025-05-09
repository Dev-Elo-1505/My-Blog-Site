import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { EntriesProp } from "../components/Body";
import { db } from "../utils/firebase";

export const useEntry = (postId: string) => {
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
  return { Entry, loading, error };
};
