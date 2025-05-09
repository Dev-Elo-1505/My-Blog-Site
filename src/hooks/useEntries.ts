import { useEffect, useState } from "react";
import { EntriesProp } from "../components/Body";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

export const useEntries = () => {
 const [entries, setEntries] = useState<EntriesProp[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<Error | null>(null);
 
   useEffect(() => {
     const fetchEntries = async () => {
       try {
         const querySnapshot = await getDocs(collection(db, "entries"));
         const fetchedEntries: EntriesProp[] = querySnapshot.docs
           .map((doc) => {
             const data = doc.data() as Omit<EntriesProp, "id">;
             return {
               id: doc.id,
               ...data,
             };
           })
           .sort(
             (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
           );
 
         setEntries(fetchedEntries);
         setIsLoading(false);
       } catch (error) {
         setError(error as Error);
         setIsLoading(false);
       }
     };
     fetchEntries();
   }, []);
    return { entries, isLoading, error };
}