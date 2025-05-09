// components/PostForm.tsx
import { useState } from "react";
import FormField from "./FormField";
import Editor from "./Editor";
import DateDisplay from "./DateDisplay";
import AuthorField from "./AuthorField";

interface PostFormProps {
  onSubmit: (values: { title: string; subtext: string; piece: string }) => void;
}

const PostForm = ({ onSubmit }: PostFormProps) => {
  const [formValues, setFormValues] = useState({
    title: "",
    subtext: "",
    piece: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formValues);
    setFormValues({ title: "", subtext: "", piece: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow-md md:px-20 md:py-5 text-text"
    >
      <FormField
        label="Title"
        name="title"
        value={formValues.title}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, title: e.target.value }))
        }
        required
      />

      <FormField
        label="Subtext"
        name="subtext"
        value={formValues.subtext}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, subtext: e.target.value }))
        }
        required
      />

      <DateDisplay />

      <AuthorField label="Author" value="Elo-oghene" />

      <div className="flex flex-col gap-2">
        <label>Piece</label>
        <Editor
          value={formValues.piece}
          onChange={(value) =>
            setFormValues((prev) => ({ ...prev, piece: value }))
          }
        />
      </div>

      <button
        type="submit"
        className="bg-accent rounded-md text-white p-2 cursor-pointer"
      >
        Publish
      </button>
    </form>
  );
};

export default PostForm;
