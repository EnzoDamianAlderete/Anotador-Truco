// "use client";
// import React, { createContext, useState } from 'react';

// interface MyContextProps {
  //Win :string;
  //setWin:(value:string)=>void;
  //winner:boolean;
  //setWinner:(value:boolean)=>void;
  //isOpen:boolean; 
  //setIsOpen:(value:boolean)=>void;
  //openModal: () => void;
  //closeModal:() => void;
  //pointsEllos: number;
  //esMayorEllos:boolean;
  //setEsMayorEllos:(value:boolean)=>void;
  //esMayorNos:boolean;
  //setEsMayorNos:(value:boolean)=>void;
  //setPointsEllos: (value:number)=>void;
  //pointsNos: number;
  //setPointsNos: (value:number)=>void;
  //RestartGame: () => void;
//   children : React.ReactNode;
// }

// export const AnotadorContext = createContext<MyContextProps>({} as MyContextProps);

// export const AnotadorProvider = ({ children }:MyContextProps) => {
//   const [Win, setWin] = useState<string>("");
//   const [winner , setWinner] = useState<boolean>(false);
//   const [ pointsEllos , setPointsEllos] = useState<number>(0);
//   const [ pointsNos , setPointsNos] = useState<number>(0);
//   const [esMayorNos , setEsMayorNos] = useState<boolean>(false);
//   const [esMayorEllos , setEsMayorEllos] = useState<boolean>(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const RestartGame =():void=>{
//     setPointsEllos(0);
//     setPointsNos(0);
//     setEsMayorNos(false);
//     setEsMayorEllos(false);
//     setWinner(false);
//     closeModal();
//   }

//   return (
//     <AnotadorContext.Provider
//      value={{pointsEllos,setPointsEllos,pointsNos,setPointsNos,RestartGame,children,esMayorNos,setEsMayorNos,esMayorEllos,setEsMayorEllos,isOpen, setIsOpen,openModal,closeModal,winner , setWinner,Win, setWin }}>
//       {children}
//     </AnotadorContext.Provider>
//   );
// };