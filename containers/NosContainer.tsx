'use client'
import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import { AnotadorContext } from "@/context/AppContext";


export function NosContainer(){

   const {pointsNos , setPointsNos} = useContext(AnotadorContext)

    const Add =()=>{
        if(pointsNos.length <= 9)setPointsNos([...pointsNos,1])
        if(pointsNos.length === 9)alert("Ganan Nos")
    }

    const Remove =()=>{
       const currentsPoints = [...pointsNos];
       currentsPoints.pop();
       setPointsNos(currentsPoints);
    }
    

    return(
        <div className="" >
            <h2 className="p-2">Nos :</h2>
            <div className="flex justify-around align-middle">
                <ButtonsContainer Add={Add} Remove={Remove}/>
                <div className="pt-7">
                {pointsNos.map((point, index) =>{
                    return(
                        <span key={index}>
                            <FosforoComponent/>
                        </span>
                    )
                })}
                </div>
            </div>
            
        </div>
    )
}