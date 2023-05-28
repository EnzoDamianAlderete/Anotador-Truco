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
        <div>
            <h2 className="p-2">Nos :</h2>
            <div className="flex justify-around align-middle container mx-auto border-r-1">
                <ButtonsContainer Add={Add} Remove={Remove}/>
                <div className="pt-7">
                <FosforoComponentNos/>
                </div>
            </div>
            
        </div>
    )
}