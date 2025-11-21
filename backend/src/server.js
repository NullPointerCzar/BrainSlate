import express from "express"
import cors from 'cors'
import dotenv from "dotenv"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT 

//MIDDlEWARE

app.use(express.json()) // Middleware to parse JSON request bodies
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(rateLimiter)


app.use((req,res,next)=>{
  console.log(`Request: ${req.method}\nRequest URL: ${req.url}`)
  next();
})

app.use("/api/notes", notesRoutes)

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
})
 