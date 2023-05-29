"use client";

import React, { ReactNode, createContext, useState } from 'react';

interface MyContextProps{
  pointsEllos: number;
  esMayorEllos:boolean;
  setEsMayorEllos:React.Dispatch<React.SetStateAction<boolean>>;
  esMayorNos:boolean;
  setEsMayorNos:React.Dispatch<React.SetStateAction<boolean>>;
  setPointsEllos: React.Dispatch<React.SetStateAction<number>>;
  pointsNos: number;
  setPointsNos: React.Dispatch<React.SetStateAction<number>>;
  RestartGame: () => void;
  children : ReactNode;
}


export const AnotadorContext = createContext<MyContextProps>({} as MyContextProps);

export const AnotadorProvider = ({ children }:MyContextProps) => {
  const [ pointsEllos , setPointsEllos] = useState<number>(0);
  const [ pointsNos , setPointsNos] = useState<number>(0);
  const [esMayorNos , setEsMayorNos] = useState<boolean>(false);
  const [esMayorEllos , setEsMayorEllos] = useState<boolean>(false);

  const RestartGame =():void=>{
    setPointsEllos(0);
    setPointsNos(0);
    setEsMayorNos(false);
    setEsMayorEllos(false);
  }

  return (
    <AnotadorContext.Provider value={{pointsEllos,setPointsEllos,pointsNos,setPointsNos,RestartGame,children,esMayorNos,setEsMayorNos,esMayorEllos,setEsMayorEllos }}>
      {children}
    </AnotadorContext.Provider>
  );
};