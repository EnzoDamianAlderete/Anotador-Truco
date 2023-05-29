'use client'

import { FosforoComponentEllos } from "@/components/FosforoComponentEllos";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import { AnotadorContext } from "@/context/AppContext";

export function EllosContainer(){

    const {pointsEllos , setPointsEllos} = useContext(AnotadorContext);

    const Add =()=>{
        if(pointsEllos <= 29) setPointsEllos(pointsEllos + 1)
        if(pointsEllos === 29) alert("Ganan Ellos")
    }


    const Remove =()=>{
        setPointsEllos(pointsEllos - 1)
    }


    return(
        <div className="flex flex-row  container mx-auto border-l-2">
            
            <div >
            <h2 className="p-2 drop-shadow-xl  border-b-2">Ellos :</h2>
                <div className="md:p-20 p-12 w-36 h-96 md:w-60 ">
                <FosforoComponentEllos/>
                </div>
            </div>

            <div className="self-center">
                <ButtonsContainer Add={Add} Remove={Remove}/>
                </div>
            
        </div>
    )
}