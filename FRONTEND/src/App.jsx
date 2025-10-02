import {Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreateNotePage  from "./pages/CreateNotePage"
import EditNotePage  from "./pages/EditNotePage"

function App() {
  return (
   <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route 
        path="/createNote" 
        element={<CreateNotePage></CreateNotePage>}
     ></Route>
      <Route 
        path="/editNote/:id"
        element={<EditNotePage></EditNotePage>}
     ></Route>
   </Routes>
  );
}

export default App;
