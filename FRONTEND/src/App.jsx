import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage';
function App() {
  return (
  <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route 
      path="/createnote" 
      element={<CreateNotePage></CreateNotePage>}
    ></Route>
    <Route 
      path="/editnote/:id"
      element={<EditNotePage></EditNotePage>}
    ></Route>

   </Routes>
  );
}

export default App;
