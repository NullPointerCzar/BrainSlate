import { useEffect, useState } from 'react'
import api from '../lib/axios' 
import Navbar from '../components/Navbar'
import Ratelimitedui from '../components/Ratelimitedui'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

 
 const HomePage = () => {
  const [isRateLimited, setISRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchnotes = async ()=>{
      try{
        const res = await api.get("/notes")
        console.log(res.data)
        setNotes(res.data)
        setISRateLimited(false)
      }
      catch(error){
        console.log("Error fetching")
        if (error.response.status === 429){
          setISRateLimited(true)
        }
        else{
          toast.error("Failed to load notes.")
        }
      }
      finally{
        setLoading(false)
      }
    }
    fetchnotes()
  },[])

   return (
     <div className = "min-h-screen">
      <Navbar />

      {isRateLimited && <Ratelimitedui />}

      <div className = "max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className = "text-center text-accent">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note=>(
              <NoteCard key={note._id} note = {note} setNotes = {setNotes} />
            ))}
          </div>
        )}
      </div>
     </div>
   )
 }
 
 export default HomePage