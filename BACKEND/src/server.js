import express from 'express';
import notesRoutes from './routes/notesRoutes.js'       
const app = express()

app.use(express.json())

const PORT = 3001

app.use("/api/notas", notesRoutes)

app.listen(PORT, () => {
  console.log(`Server arrancando en el puerto http://localhost:${PORT}`)
})
