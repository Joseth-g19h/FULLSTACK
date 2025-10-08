import NoteForm from "../components/NoteForm"
import axios from "axios"
import { toast } from "react-toastify"

const CreateNotePage = () => {
  const handleCreate = async (note) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/notas`, note)
      .then(res => {
        if(res.status === 201) {
          throw new Error("Error al crear la nota");
        }

        toast.success("Nota creada con exito", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored"
        });
        Navigate("/")
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NoteForm onSubmit={handleCreate} initialData={{ title: "", content: "" }} />
    </div>
  )
}

export default CreateNotePage
