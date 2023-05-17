'use client'

import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";

export function EllosContainer(){

    const [ pointsEllos , setPointsEllos] = useState<number[]>([]);

    const Add =()=>{
        if(pointsEllos.length <= 4) setPointsEllos([...pointsEllos,1])
        if(pointsEllos.length === 4) alert("Ganan Ellos")
    }


    const Remove =()=>{
        const points = [...pointsEllos];
        points.pop();
        setPointsEllos(points);
    }

    return(
        <div className="aaf">
            <h2>Ellos</h2>
            <div className="flex flex-row-reverse">
            <ButtonsContainer Add={Add} Remove={Remove}/>
            <div>
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