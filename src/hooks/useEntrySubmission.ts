
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

interface EntryData {
  title: string;
  subtext: string;
  piece: string;
}

export const useEntrySubmission = () => {
  const getFormattedDate = () => {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(now);
  };

  const submitEntry = async (entryData: EntryData) => {
    try {
      const docRef = await addDoc(collection(db, "entries"), {
        ...entryData,
        date: getFormattedDate(),
        author: "Elo-oghene",
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  return { submitEntry };
};