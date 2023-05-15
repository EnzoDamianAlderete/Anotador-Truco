import { ButtonAdd } from "@/components/ButtonAdd";
import { ButtonRemove } from "@/components/ButtonRemonve";

export function ButtonsContainer(){
    
    return(
        <div className="flex flex-col gap-2">
            <ButtonAdd/>
            <ButtonRemove/>
        </div>
    )
}