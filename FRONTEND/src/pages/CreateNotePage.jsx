import NoteForm from "../components/NoteForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateNotePage = () => {
  const navigate = useNavigate();
  const handleCreate = async (note) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/notas`, note);
      
      if (res.status === 201) {
        toast.success("Nota creada con éxito", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored",
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al crear la nota", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }

  return (
    <div>
      <NoteForm
        onSubmit={handleCreate}
        initialData={{ title: "", content: "" }}
      />
    </div>
  );
};

export default CreateNotePage;