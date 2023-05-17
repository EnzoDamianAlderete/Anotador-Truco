'use client'
import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";


export function NosContainer(){

    const [ pointsNos , setPointsNos] = useState<number[]>([]);

    const Add =()=>{
        setPointsNos([...pointsNos,1])
    }

    const Remove =()=>{
       const currentsPoints = [...pointsNos];
       currentsPoints.pop();
       setPointsNos(currentsPoints);
    }
    

    return(
        <div className="" >
            <h2>Nos</h2>
            <div className="flex justify-around align-middle">
                <ButtonsContainer Add={Add} Remove={Remove}/>
                <div>
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