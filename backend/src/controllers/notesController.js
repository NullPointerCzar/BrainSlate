import Note from "../models/Note.js";


const getAllNotes = async (req, res) => {
  try{
    const notes = await Note.find().sort({createdAt: -1})
    res.status(200).json(notes)

  }
  catch{
    console.error("Error in getting all notes", error)
  }
}

const createNote = async (req, res) => {
  // create a new note
  try{
    const {title, content} = req.body
    const note = new Note({title, content})

    const savedNote = await note.save()
    res.status(201).json(savedNote)
  }
  catch{
    console.error("Could'nt create a note")
  }
}

const updateNote = async (req, res) => {
  // update a note
  try{
    const {title, content} = await req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},
      {
      new: true  //By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
      }
    )

    if (!updatedNote) return res.status(404).json({message: "Note not found"})


    res.status(200).json({message: "Upated successfully"})
  }
  catch{
    console.error("Error in updating", error)
    res.status(500).json({message:"Internal Server Error"})
  }
}

const deleteNote = async (req, res) => {
  // delete a note
  try{
    const deletedNote = await Note.findByIdAndDelete(req.params.id)

    if (!deletedNote) return res.status(404).json({message: "Not found"})

    res.status(200).json({message: "Deleted Successfully"})
  }
  catch(error){
    console.error("An error occured, couldn't delete",error)
  }
}

const getNoteById = async (req, res) => {

  try{
    const fetchedNote = await Note.findById(req.params.id)
    res.status(200).json(fetchedNote)

    if (!fetchedNote) return res.status(404).json({message: "Enter correct id to get"})
  }
  catch(error){
    console.error("Couldn't get the note", error)
  }
}


export { getAllNotes, createNote, updateNote, deleteNote, getNoteById }
 