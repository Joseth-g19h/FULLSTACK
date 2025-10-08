import React from "react";
import { SquarePen, Trash } from "lucide-react";

//id 
const Cardnote = ({ title, content, id, date }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-accent font-bold lg:text-2xl">
          {title}
        </h2>
        <p className="text-amber-50">{content}</p>
        <div className="flex justify-between items-center mt-6">
          <time dateTime={date}>{date}</time>
          <div className="flex gap-4">
            <SquarePen className="text-white cursor-pointer"> </SquarePen>
            <Trash className="text-red-400 cursor-pointer"></Trash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardnote;