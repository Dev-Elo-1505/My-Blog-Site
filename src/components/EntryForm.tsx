import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean"], // remove formatting button
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
];

const EntryForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    piece: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePieceChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, piece: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "entries"), {
        title: formValues.title,
        piece: formValues.piece,
        date: getFormattedDate(),
        author: "Elo-oghene",
      });
      console.log("Document written with ID: ", docRef.id);
      setFormValues({ title: "", piece: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const getFormattedDate = () => {
    const now = new Date();
    let day = now.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <form
      className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow-md md:px-20 md:py-5 text-text"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="">
          Title
        </label>
        <input
          type="text"
          className="bg-secondary p-2 outline-none rounded-md"
          onChange={handleChange}
          name="title"
          value={formValues.title}
        />
      </div>
      <div>
        <div>Date</div>
        <div>{getFormattedDate()}</div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Author">Author</label>
        <input
          type="text"
          value={"Elo-oghene"}
          readOnly
          className="bg-secondary p-2 outline-none rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="piece">Piece</label>
        <ReactQuill
          theme="snow"
          value={formValues.piece}
          onChange={handlePieceChange}
          modules={modules}
          formats={formats}
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

export default EntryForm;
