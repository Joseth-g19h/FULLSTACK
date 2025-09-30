import express from 'express';
const router = express.Router()

//Obtener todas las notas
router.get("/", () => {    
    console.log("Enviando una nota")
})


//Obtener una nota por su id
router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log(id) 
    console.log("Enviando una nota por su id")
})

//Crear una nueva nota
router.post("/", (req, res) => {
    const { title, content } = req.body
    console.log(req.body)
    console.log(title, content)
})

//Eliminar una nota 
router.delete("/:id", (req, res) => {
    const id = req.params.id
    console.log("Eliminando una nota por su id")
    console.log(id)
})

//Editar una nota 
router.put("/:id", (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    console.log("Editar una nota")
    console.log(updatedData)
    console.log(id)
})

export default router
