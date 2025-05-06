import { collection, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase"
import { useEffect, useState } from "react"


interface EntriesProp {
  id: string
  title: string
  piece: string
  date: string
  author: string
}

const HomePage = () => {
  const [entries, setEntries] = useState<EntriesProp[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(()=> {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'entries'))
       const fetchedEntries: EntriesProp[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<EntriesProp, "id">
        return {
          id: doc.id,
          ...data,
        }
       })
          
        
        setEntries(fetchedEntries)
        setIsLoading(false)
      } catch (error) {
        setError(error as Error)
        setIsLoading(false)
      }
    }
    fetchEntries()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
      <h1>Entries</h1>
      {entries.map(entry => (
        <div key={entry.id}>
          <h2>{entry.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: entry.piece }} />
          <p>{entry.date}</p>
          <p>{entry.author}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage