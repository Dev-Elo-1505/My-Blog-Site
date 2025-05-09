import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";
import { EntriesProp } from "../components/Body";
import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";

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
    <Layout>
      <ContentWrapper showBackButton>
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
      </ContentWrapper>
    </Layout>
  );
};

export default PostDetailsPage;
