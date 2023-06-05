export type AnotadorContextType = {
    Win:string; 
    setWin:(value:string)=>void;
    winner:boolean;
    setWinner:(value:boolean)=>void;
    isOpen:boolean; 
    setIsOpen:(value:boolean)=>void;
    openModal: () => void;
    closeModal:() => void;
    pointsEllos: number;
    esMayorEllos:boolean;
    setEsMayorEllos:(value:boolean)=>void;
    esMayorNos:boolean;
    setEsMayorNos:(value:boolean)=>void;
    setPointsEllos: (value:number)=>void;
    pointsNos: number;
    setPointsNos: (value:number)=>void;
    RestartGame: () => void;
    children : React.ReactNode;
}