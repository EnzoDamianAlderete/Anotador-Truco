'use client'
import { AnotadorContext } from "@/context/AppContext"
import { useContext } from "react"


export function ButtonNewGame(){

    const {openModal} = useContext(AnotadorContext);

    return(
        <button 
        onClick={openModal}
        className="font-semibold  bg-yellow-900 w-52 p-2 text-lg rounded-md self-center my-6 border-2 border-yellow-600">Nueva Partida</button>
    )
}