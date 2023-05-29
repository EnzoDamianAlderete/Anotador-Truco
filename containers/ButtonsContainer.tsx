'use client';

import { MouseEventHandler } from "react";

interface ButtonsContainerProps {
    Add: MouseEventHandler<HTMLButtonElement>;
    Remove: MouseEventHandler<HTMLButtonElement>;
  }

export function ButtonsContainer({Add,Remove}:ButtonsContainerProps){
 
    return(
        <div className="flex flex-col gap-1 ">
            <button 
            onClick={Add}
            className="p-1 rounded-full border-2"
            >+
            </button>
            <button 
            onClick={Remove}
            className="p-1 rounded-full border-2">
            -
            </button>
        </div>
    )
}