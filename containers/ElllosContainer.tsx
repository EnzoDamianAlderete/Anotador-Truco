'use client'

import { FosforoComponentEllos } from "@/components/FosforoComponentEllos";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import   Context  from "@/context/AppContext";
import { AnotadorContextType } from "@/context/types";

export function EllosContainer(){

    const {pointsEllos , setPointsEllos, setWinner,setWin} = useContext(Context) as AnotadorContextType;
    

    const Add =()=>{
        if(pointsEllos <= 29) setPointsEllos(pointsEllos + 1)
        if(pointsEllos === 29){
            setWinner(true)
            setWin("Ellos")
        } 
    }


    const Remove =()=>{
        setPointsEllos(pointsEllos - 1)
    }


    return(
        <div className="flex flex-row  container mx-auto border-l-2">
            
            <div >
            <h2 className="p-2 drop-shadow-xl  border-b-2">Ellos :</h2>
                <div className="md:p-10 p-9 w-36 h-96 md:w-60 ">
                <FosforoComponentEllos/>
                </div>
            </div>

            <div className="self-center">
                <ButtonsContainer Add={Add} Remove={Remove}/>
                </div>
            
        </div>
    )
}