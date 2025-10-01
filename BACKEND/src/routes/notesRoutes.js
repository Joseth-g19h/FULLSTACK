import express from 'express';
import Note from '../models/noteModels.js';
const router = express.Router()

//Obtener todas las notas
router.get("/", async(req, res) => {    
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error al obtener las notas:", error)
        res.status(500).json({ message: "Internal server error"})
    }
}) 


//Obtener una nota por su id
router.get("/:id",  async(req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        if(!note) return res.status(404).json({ message: "Nota no encontrada"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error al obtener la nota por su id:", error)
        res.status(500).json({ message: "Internal server error"})
    }
})

//Crear una nueva nota
router.post("/", async (req, res) => {
   try {  
        const { title, content } = req.body
        const note = new Note({ title, content })

        const savedNote = await note.save()

        if(savedNote) { 
            res.status(201).json({ message: "Nota creada exitosamente", note: savedNote })
        }
   } catch (error) {
       console.error("Error al crear una nueva nota:", error)
       res.status(500).json({ message: "Internal server error"})
   }
})

//Eliminar una nota 
router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id
        const deletedNote = await Note.findByIdAndDelete(id)
        if(!deletedNote) return res.status(404).json({ message: "Nota no encontrada"})
        res.status(200).json({ message: "Nota eliminada exitosamente"})
    } catch (error) {
        console.error("Error al eliminar una nota:", error)
        res.status(500).json({ message: "Internal server error"})
    }
})

//Editar una nota 
router.put("/:id", async(req, res) => {
    try {
        const id = req.params.id
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true })
        if(!updatedNote) return res.status(404).json({ error: "Nota no actualizada correctamente"})
        res.status(200).json({ message: "Nota actualizada exitosamente", note: updatedNote })
    } catch (error) {
        console.error("Error al actualizar una nota:", error)
        res.status(500).json({ message: "Internal server error"})
    }          
})

export default router