import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";
import { useState } from "react";


export function NosContainer(){

    const points =[2,3,4,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1]

    return(
        <div className="" >
            <h2>Nos</h2>
            <div className="flex justify-around align-middle">
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