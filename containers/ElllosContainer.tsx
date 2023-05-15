import { FosforoComponent } from "@/components/FosforoComponent";
import { ButtonsContainer } from "./ButtonsContainer";

export function EllosContainer(){

    const points =[1,2,3,4,5,6,7,8,9];

    return(
        <div className="bg-blue-300">
            <h2>Ellos</h2>
            <div className="flex flex-row-reverse">
            <ButtonsContainer/>
            <div>
                {points.map(point=>{
                    return(
                        <FosforoComponent/>
                    )
                })}
            </div>
            </div>
            
        </div>
    )
}