'use client'
import { FosforoComponentNos } from "@/components/FosforoComponentNos";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import { AnotadorContext } from "@/context/AppContext";


export function NosContainer(){

   const {pointsNos , setPointsNos} = useContext(AnotadorContext)

    const Add =()=>{
        if(pointsNos <= 14)setPointsNos( pointsNos + 1)
        if(pointsNos === 14)alert("Ganan Nos")
    }

    const Remove =()=>{
       setPointsNos( pointsNos - 1);
    }
    

    return(
        <div className="flex flex-row-reverse container mx-auto">
            <div >
                <h2 className="p-2 drop-shadow-md border-b-2 ">Nos :</h2>
                <div className="md:p-20 p-12 w-36 h-96 md:w-60 ">
                <FosforoComponentNos/>
                </div>
            </div>
            <div className="self-center">
            <ButtonsContainer Add={Add} Remove={Remove}/>
            </div>
        </div>
    )
}