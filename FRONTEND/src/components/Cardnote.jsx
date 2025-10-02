import React from "react";
import { SquarePen, Trash } from "lucide-react";
export const Cardnote = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-accent font-bold lg:text-2xl">Card Title</h2>
        <p className="text-amber-50">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="flex justify-between items-center mt-6">
          <time datetime="">25 de Marzo de 2025</time>
          <div className="flex gap-4">
            <SquarePen className="text-white cursor-pointer"> </SquarePen>
            <Trash className="text-red-400 cursor-pointer"></Trash>
        </div>
      </div>
    </div>
  </div>
  );
};


