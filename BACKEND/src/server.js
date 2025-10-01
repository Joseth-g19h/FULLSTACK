import express from 'express';
import notesRoutes from './routes/notesRoutes.js'  
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config();

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.use("/api/notas", notesRoutes)

connectDB()
.then(() => {

  app.listen(PORT, () => {
    console.log(`Server arrancando en el puerto http://localhost:${PORT}`)
  })

})
