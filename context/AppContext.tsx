"use client";

import React, { ReactNode, createContext, useState } from 'react';

interface MyContextProps{
  pointsEllos: number;
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

  const RestartGame =():void=>{
    setPointsEllos(0);
    setPointsNos(0);
  }

  return (
    <AnotadorContext.Provider value={{pointsEllos,setPointsEllos,pointsNos,setPointsNos,RestartGame,children }}>
      {children}
    </AnotadorContext.Provider>
  );
};