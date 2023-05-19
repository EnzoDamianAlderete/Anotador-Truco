'use client'

import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useContext, useState } from "react";
import { AnotadorContext } from "@/context/AppContext";

export function EllosContainer(){

    const {pointsEllos , setPointsEllos} = useContext(AnotadorContext);

    const Add =()=>{
        if(pointsEllos.length <= 9) setPointsEllos([...pointsEllos,1])
        if(pointsEllos.length === 9) alert("Ganan Ellos")
    }


    const Remove =()=>{
        const points = [...pointsEllos];
        points.pop();
        setPointsEllos(points);
    }


    return(
        <div>
            <h2 className="p-2">Ellos :</h2>
            <div className="flex flex-row-reverse border-l-2 ">
            <ButtonsContainer Add={Add} Remove={Remove}/>
            <div className="pt-7">
                {pointsEllos.map((point,index)=>{
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