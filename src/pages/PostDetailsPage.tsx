import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../utils/firebase";
import { EntriesProp } from "../components/Body";
import Sidebar from "../components/Sidebar";
import { IoArrowBackOutline } from "react-icons/io5";

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
    return <p className="text-text p-20">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="p-5 text-text bg-primary">
      <Link to="/" className="flex items-center mb-5 text-text-secondary">
          <IoArrowBackOutline className="text-2xl" />
          <span className="ml-2">Back</span>
        </Link>
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
            <h1 className="text-4xl font-semibold mb-2">{Entry.title}</h1>
            <p className="italic mb-5 font-light">{Entry.subtext}</p>
            <p
              dangerouslySetInnerHTML={{ __html: Entry.piece }}
              className="text-lg prose max-w-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailsPage;
