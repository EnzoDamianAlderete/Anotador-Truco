'use client'
import { ButtonNewGame } from '@/components/ButtonNewGame'
import Modal from '@/components/Modal';
import { EllosContainer } from '@/containers/ElllosContainer'
import { NosContainer } from '@/containers/NosContainer'
import { useContext } from 'react';
import Image from 'next/image';
import AlertWin from '@/components/AlertWin';
import Context from '@/context/AppContext';
import { AnotadorContextType } from '@/context/types';

export default function Home() {
  const {Win,winner,isOpen , closeModal,RestartGame} = useContext(Context) as AnotadorContextType;
  
  
  return (
    <main className='text-center text-white text-2xl relative'>
      <div className='bg-truco border-yellow-600 border-b-4 flex'>
      <h1 className='text-yellow-500 font-bold pt-4 bg-black bg-opacity-80 text-center w-full'>🗡Anotador ⚔ Truco🗡</h1>
      </div>
      
      <div className='grid grid-cols-2 grid-rows-1'>
        <NosContainer/>
        <EllosContainer/>
      </div>
      <ButtonNewGame/>
      
      <Modal isOpen={isOpen}>
        <h3 className='text-center text-xl border-b-2 mb-2 flex justify-center align-middle text-yellow-400'>Nueva Partida</h3>
        <p className='text-center  text-sm mb-2'>¿Queres jugar una nueva partida?</p>
        <Image
            src="/carpincho.jpg"
            width={200}
            height={200}
            alt="carpincho"
            />
        <div className='flex gap-2 justify-center align-middle pt-6'>
        <button 
        onClick={closeModal} 
        className="font-semibold  bg-yellow-900 w-24 text-base rounded-md self-center border-2 p-1 border-yellow-600"
        >Cancelar</button>
        <button  
        onClick={RestartGame} 
        className="font-semibold  bg-yellow-900 w-24 text-base rounded-md self-center border-2 p-1 border-yellow-600"
        >Aceptar</button>
        </div>
        
      </Modal>
      {winner ? <AlertWin winner={Win} />: null}
      
    </main>
  )
}
