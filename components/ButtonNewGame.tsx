'use client'
import { AnotadorContext } from "@/context/AppContext"
import { useContext } from "react"


export function ButtonNewGame(){

    const {RestartGame} = useContext(AnotadorContext);
    
    return(
        <button 
        onClick={()=>RestartGame()}
        className="bg-sky-500 hover:bg-sky-700 w-52 p-2 rounded-full self-center my-6">Nueva Partida</button>
    )
}