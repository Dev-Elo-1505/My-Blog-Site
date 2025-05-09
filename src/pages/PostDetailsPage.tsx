import Layout from "../components/Layout";
import ContentWrapper from "../components/ContentWrapper";
import { useEntry } from "../hooks/useEntry";
import PostContent from "../components/PostContent";
import { useParams } from "react-router-dom";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { Entry, loading, error } = useEntry(postId!);

  if (loading) {
    return <p className="text-text p-20">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Layout>
      <ContentWrapper showBackButton>
        {Entry && <PostContent entry={Entry} />}
      </ContentWrapper>
    </Layout>
  );
};

export default PostDetailsPage;
