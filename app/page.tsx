'use client'
import { ButtonNewGame } from '@/components/ButtonNewGame'
import Modal from '@/components/Modal';
import { EllosContainer } from '@/containers/ElllosContainer'
import { NosContainer } from '@/containers/NosContainer'
import { AnotadorContext } from '@/context/AppContext';
import { useContext } from 'react';
import Image from 'next/image';

export default function Home() {
  const {isOpen , closeModal,RestartGame} = useContext(AnotadorContext);
  
  return (
    <main className='text-center font-mono font-bold text-white text-2xl relative'>
      <div className='bg-truco border-yellow-600 border-b-4 flex justify-center align-middle pt-4'>
      <h1 className='text-yellow-500'>Anotador Truco</h1>
      </div>
      
      <div className='grid grid-cols-2 grid-rows-1'>
        <NosContainer/>
        <EllosContainer/>
      </div>
      <ButtonNewGame/>
      
      <Modal isOpen={isOpen}>
        <h3 className='text-center font-mono text-xl border-b-2 mb-2 flex justify-center align-middle text-yellow-400'>Nueva Partida</h3>
        <p className='text-center font-mono text-sm mb-2'>¿Queres jugar una nueva partida?</p>
        <Image
            src="/carpincho.jpg"
            width={200}
            height={200}
            alt="fosforo"
            />
        <div className='flex gap-2 justify-center align-middle pt-6'>
        <button onClick={closeModal} className="font-semibold  bg-yellow-900 w-24 text-base rounded-md self-center border-2 p-1 border-yellow-600">Cancelar</button>
        <button  onClick={RestartGame} className="font-semibold  bg-yellow-900 w-24 text-base rounded-md self-center border-2 p-1 border-yellow-600">Aceptar</button>
        </div>
        
      </Modal>
    </main>
  )
}
