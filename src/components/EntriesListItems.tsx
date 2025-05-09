import { Link } from "react-router-dom";
import { EntriesProp } from "./Body";

const EntriesListItems = ({ entry }: { entry: EntriesProp }) => {
  return (
    <div className="mb-3 hover:bg-secondary rounded-lg">
      <div key={entry.id} className="mb-5 hover:bg-secondary p-5 rounded-lg">
        <Link to={`/post/${entry.id}`}>
          <p>
            <span className="text-text-secondary uppercase ">{entry.date}</span>
            <span className="italic font-light"> by </span>
            <span className="text-text-secondary uppercase ">
              {entry.author}
            </span>
          </p>
          <h2 className="text-3xl font-bold">{entry.title}</h2>
          <p className="text-sm italic font-light text-text-secondary">{entry.subtext}</p>
        </Link>
      </div>
    </div>
  );
};

export default EntriesListItems;
