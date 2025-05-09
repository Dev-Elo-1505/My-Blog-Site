
interface PostMetaProps {
    date: string;
    author: string;
  }
  
  const PostMeta = ({ date, author }: PostMetaProps) => (
    <p>
      <span className="text-text-secondary uppercase">{date}</span>
      <span className="italic font-light"> by </span>
      <span className="text-text-secondary uppercase">{author}</span>
    </p>
  );
  
  export default PostMeta;