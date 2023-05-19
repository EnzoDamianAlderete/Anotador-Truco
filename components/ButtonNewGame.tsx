'use client'
import { AnotadorContext } from "@/context/AppContext"
import { useContext } from "react"


export function ButtonNewGame(){

    const {RestartGame} = useContext(AnotadorContext);

    return(
        <button 
        onClick={()=>RestartGame()}
        className="font-semibold bg-yellow-950 w-52 p-2 text-lg rounded-md self-center my-6 border-2 border-yellow-600">Nueva Partida</button>
    )
}