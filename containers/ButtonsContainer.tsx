'use client';

import { MouseEventHandler } from "react";

interface ButtonsContainerProps {
    Add: MouseEventHandler<HTMLButtonElement>;
    Remove: MouseEventHandler<HTMLButtonElement>;
  }

export function ButtonsContainer({Add,Remove}:ButtonsContainerProps){
 
    return(
        <div className="flex flex-col gap-8 ">
            <button 
            onClick={Add}
            ><svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
            </button>
            <button 
            onClick={Remove}>
            <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12h8"></path>
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path>
            </svg>
            </button>
        </div>
    )
}