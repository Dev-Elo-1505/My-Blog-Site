import { EntriesProp } from "./Body";
import PostMeta from "./PostMeta";

const PostContent = ({ entry }: { entry: EntriesProp }) => (
    <article>
      <PostMeta date={entry.date} author={entry.author} />
      <h1 className="text-4xl font-semibold mb-2">{entry.title}</h1>
      <p className="italic mb-5 font-light text-sm text-text-secondary">{entry.subtext}</p>
      <div dangerouslySetInnerHTML={{ __html: entry.piece }} />
    </article>
  );

  export default PostContent;