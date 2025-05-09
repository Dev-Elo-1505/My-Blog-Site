// components/EntryForm.tsx
import PostForm from "./PostForm";
import { useEntrySubmission } from "../hooks/useEntrySubmission";

const EntryForm = () => {
  const { submitEntry } = useEntrySubmission();

  return <PostForm onSubmit={submitEntry} />;
};

export default EntryForm;