import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";


export function NosContainer(){

    const points =[2,3,4,2,3,4]

    return(
        <div className="bg-red-300 h-screen" >
            <h2>Nos</h2>
            <div className="flex">
                <ButtonsContainer/>
                <div>
                {points.map(point =>{
                    return(
                        <FosforoComponent/>
                    )
                })}
                </div>
            </div>
            
        </div>
    )
}