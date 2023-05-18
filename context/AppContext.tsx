"use client";

import React, { createContext, useState } from 'react';


export const AnotadorContext = createContext();

export const AnotadorProvider = ({ children }) => {
  const [ pointsEllos , setPointsEllos] = useState<number[]>([]);
  const [ pointsNos , setPointsNos] = useState<number[]>([]);

  const RestartGame =()=>{
    setPointsEllos([]);
    setPointsNos([]);
  }

  return (
    <AnotadorContext.Provider value={{pointsEllos,setPointsEllos,pointsNos,setPointsNos,RestartGame }}>
      {children}
    </AnotadorContext.Provider>
  );
};