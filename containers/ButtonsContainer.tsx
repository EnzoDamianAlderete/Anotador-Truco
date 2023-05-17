'use client';

import { ButtonAdd } from "@/components/ButtonAdd";
import { ButtonRemove } from "@/components/ButtonRemonve";

export function ButtonsContainer(){

    const Add =()=>{
        console.log("agregando");
    }

    const Remove =()=>{
        console.log("remove");
    }
    
    return(
        <div className="flex flex-col gap-2">
            <button 
            onClick={()=>Add()}
            className="p-2 rounded-full bg-blue-500"
            >+
            </button>
            <button 
            onClick={()=>Remove()}
            className="p-2 rounded-full bg-red-500">
            -
            </button>
        </div>
    )
}