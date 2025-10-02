import React from 'react'
import { Cardnote } from '../components/Cardnote';

export const HomePage = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 mt-16 xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]"> 
        <Cardnote></Cardnote>
        <Cardnote></Cardnote>
        <Cardnote></Cardnote>
        <Cardnote></Cardnote>
    </div>
  );
}

export default HomePage;