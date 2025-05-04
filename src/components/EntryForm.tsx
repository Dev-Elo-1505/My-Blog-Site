import { useState } from "react";

const EntryForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    piece: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <textarea
          rows={20}
          cols={100}
          className="bg-secondary p-2 outline-none rounded-md"
          name="piece"
          value={formValues.piece}
          onChange={handleChange}
        ></textarea>
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
