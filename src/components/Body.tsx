import { useEntries } from "../hooks/useEntries";
import EntriesList from "./EntriesList";

export interface EntriesProp {
  id: string;
  title: string;
  subtext: string;
  piece: string;
  date: string;
  author: string;
}

const Body = () => {
  const { entries, isLoading, error } = useEntries();
  
  if (isLoading) {
    return <div className="text-text p-20">Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <EntriesList entries={entries} />;
};

export default Body;
