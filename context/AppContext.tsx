"use client";

import React, { ReactNode, createContext, useState } from 'react';

interface MyContextProps{
  pointsEllos: number[];
  setPointsEllos: React.Dispatch<React.SetStateAction<number[]>>;
  pointsNos: number[];
  setPointsNos: React.Dispatch<React.SetStateAction<number[]>>;
  restartGame: () => void;
  children : ReactNode;
}


export const AnotadorContext = createContext<MyContextProps>({} as MyContextProps);

export const AnotadorProvider = ({ children }:MyContextProps) => {
  const [ pointsEllos , setPointsEllos] = useState<number[]>([]);
  const [ pointsNos , setPointsNos] = useState<number[]>([]);

  const restartGame =():void=>{
    setPointsEllos([]);
    setPointsNos([]);
  }

  return (
    <AnotadorContext.Provider value={{pointsEllos,setPointsEllos,pointsNos,setPointsNos,restartGame,children }}>
      {children}
    </AnotadorContext.Provider>
  );
};