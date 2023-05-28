'use client'

import { FosforoComponentEllos } from "@/components/FosforoComponentEllos";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import { AnotadorContext } from "@/context/AppContext";

export function EllosContainer(){

    const {pointsEllos , setPointsEllos} = useContext(AnotadorContext);

    const Add =()=>{
        if(pointsEllos <= 14) setPointsEllos(pointsEllos + 1)
        if(pointsEllos === 14) alert("Ganan Ellos")
    }


    const Remove =()=>{
        setPointsEllos(pointsEllos - 1)
    }


    return(
        <div>
            <h2 className="p-2">Ellos :</h2>
            <div className="flex flex-row-reverse justify-around align-middle container mx-auto border-l-2">
            <ButtonsContainer Add={Add} Remove={Remove}/>
            <div className="pt-7">
            <FosforoComponentEllos/>
            </div>
            </div>
            
        </div>
    )
}