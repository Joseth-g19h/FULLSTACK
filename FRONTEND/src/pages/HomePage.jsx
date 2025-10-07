import React, { use } from 'react'
import { Cardnote } from '../components/Cardnote';
import axios from 'axios';
import { useState, useEffect } from 'react';
const apiURL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notas`);
        setNotes(response.data);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]"> 
        {notes.map((note) => (
          <Cardnote 
          key={note.id} 
          title={note.title}
          content={note.content}
          id={note.id}
          />
        ))}
    </div>
  );
}

export default HomePage;