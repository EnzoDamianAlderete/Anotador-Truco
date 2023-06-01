import { AnotadorContext } from '@/context/AppContext';
import Image from 'next/image';
import React, { useContext } from 'react';

interface AlertWinProps {
  winner: string;
}

const AlertWin: React.FC<AlertWinProps>  = ({winner}) => {
  
  const {RestartGame}= useContext(AnotadorContext)
  return (
    <div className="flex flex-col bg-black bg-opacity-60 w-full h-screen absolute top-0">
      <div className="bg-amber-950 w-72 h-92 p-8 mt-36 rounded-md self-center">
          <h3 className='text-center text-xl  flex justify-center align-middle text-yellow-400 border-b-2 mb-2'>Ganan {winner}!🎉</h3>
          
        
        <p className='text-center  text-sm mb-2'>Felicidades Chamig@!</p>
        <Image
            src="/carpincho-win.jpg"
            width={200}
            height={200}
            alt="carpincho"
            />
        <div className='flex gap-2 justify-center align-middle pt-6'>
        <button  
        onClick={RestartGame} 
        className="font-semibold  bg-yellow-900 w-36 text-base rounded-md self-center border-2 p-1 border-yellow-600"
        >Nueva partida</button>
        </div>
      </div>
    </div>
  );
};

export default AlertWin;