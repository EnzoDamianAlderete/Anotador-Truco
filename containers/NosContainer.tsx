'use client'
import { FosforoComponentNos } from "@/components/FosforoComponentNos";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import   Context  from "@/context/AppContext";
import { AnotadorContextType } from "@/context/types";


export function NosContainer(){

   const {pointsNos,setPointsNos,setWin,setWinner} = useContext(Context) as AnotadorContextType;

    const Add =():void=>{
        if(pointsNos <= 29)setPointsNos( pointsNos + 1)
        if(pointsNos === 29){
            setWinner(true)
            setWin("Nos")
        } 
    }

    const Remove =():void=>{
        if(pointsNos > 0)setPointsNos( pointsNos - 1);
    }
    

    return(
        <div className="flex flex-row-reverse container mx-auto">
            <div >
                <h2 className="p-2 drop-shadow-md border-b-2 ">Nos :</h2>
                <div className="md:p-10 p-9 w-36 h-128 md:w-60">
                <FosforoComponentNos/>
                </div>
            </div>
            <div className="self-center">
            <ButtonsContainer Add={Add} Remove={Remove}/>
            </div>
        </div>
    )
}