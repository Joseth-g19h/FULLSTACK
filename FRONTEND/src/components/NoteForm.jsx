
const NoteForm = () => {
  return (
    <form className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10">
      <input 
       placeholder="Titulo" 
       className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
       type="text" 
       id="title" 
       name="title" 
       required />
       <textarea 
       className="input lg:input-lg resize-y w-full mb-8 textarea focus:outline-0 border-0" 
       name="description" 
       id="description" 
       placeholder="Descripción de la tarea" 
       required>
       </textarea>
    </form>
  );
};
export default NoteForm;
