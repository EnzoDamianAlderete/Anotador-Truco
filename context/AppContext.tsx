'use client'
import { createContext , ReactNode, useState} from "react";
import { AnotadorContextType } from "./types"


const Context = createContext({});

interface Props{
  children:ReactNode;
}

export function AnotadorContextProvider({children}:Props){
  const [Win, setWin] = useState<string>("");
  const [winner , setWinner] = useState<boolean>(false);
  const [ pointsEllos , setPointsEllos] = useState<number>(0);
  const [ pointsNos , setPointsNos] = useState<number>(0);
  const [esMayorNos , setEsMayorNos] = useState<boolean>(false);
  const [esMayorEllos , setEsMayorEllos] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = ():void => {
    setIsOpen(true);
  };

  const closeModal = ():void => {
    setIsOpen(false);
  };

  const RestartGame =():void=>{
    setPointsEllos(0);
    setPointsNos(0);
    setEsMayorNos(false);
    setEsMayorEllos(false);
    setWinner(false);
    closeModal();
  }


  return <Context.Provider value={{RestartGame,openModal,closeModal,Win, setWin,winner , setWinner,pointsEllos , setPointsEllos,pointsNos , setPointsNos,esMayorNos , setEsMayorNos,esMayorEllos , setEsMayorEllos,isOpen, setIsOpen}}>{children}</Context.Provider>
}

export default Context;