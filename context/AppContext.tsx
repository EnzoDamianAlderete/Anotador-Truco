'use client'
import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

export interface MyContextProps {
  Win: string;
  setWin: Dispatch<SetStateAction<string>>;
  winner: boolean;
  setWinner: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  pointsEllos: number;
  esMayorEllos: boolean;
  setEsMayorEllos: Dispatch<SetStateAction<boolean>>;
  esMayorNos: boolean;
  setEsMayorNos: Dispatch<SetStateAction<boolean>>;
  setPointsEllos: Dispatch<SetStateAction<number>>;
  pointsNos: number;
  setPointsNos: Dispatch<SetStateAction<number>>;
  RestartGame: () => void;
}

export const AnotadorContext = createContext<MyContextProps | undefined>(undefined);

export const AnotadorProvider = ({ children }: { children: ReactNode }) => {
  const [Win, setWin] = useState<string>("");
  const [winner, setWinner] = useState<boolean>(false);
  const [pointsEllos, setPointsEllos] = useState<number>(0);
  const [pointsNos, setPointsNos] = useState<number>(0);
  const [esMayorNos, setEsMayorNos] = useState<boolean>(false);
  const [esMayorEllos, setEsMayorEllos] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const RestartGame = (): void => {
    setPointsEllos(0);
    setPointsNos(0);
    setEsMayorNos(false);
    setEsMayorEllos(false);
    setWinner(false);
    closeModal();
  };

  return (
    <AnotadorContext.Provider value={{
      Win,
      setWin,
      winner,
      setWinner,
      isOpen,
      setIsOpen,
      openModal,
      closeModal,
      pointsEllos,
      esMayorEllos,
      setEsMayorEllos,
      esMayorNos,
      setEsMayorNos,
      setPointsEllos,
      pointsNos,
      setPointsNos,
      RestartGame,
    }}>
      {children}
    </AnotadorContext.Provider>
  );
};
