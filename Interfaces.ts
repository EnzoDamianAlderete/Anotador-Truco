import React, { ReactNode} from 'react';

export interface MyContextProps{
    Win :string;
    setWin:React.Dispatch<React.SetStateAction<string>>;
    winner:boolean;
    setWinner:React.Dispatch<React.SetStateAction<boolean>>;
    isOpen:boolean; 
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    openModal: () => void;
    closeModal:() => void;
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