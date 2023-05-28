import { ButtonNewGame } from '@/components/ButtonNewGame'
import { EllosContainer } from '@/containers/ElllosContainer'
import { NosContainer } from '@/containers/NosContainer'

export default function Home() {
  return (
    <main className='text-center font-bold text-white text-2xl'>
      <h1 className='font-bold text-yellow-400 bg-yellow-950 p-4 border-b-4 border-yellow-600'>ANOTADOR TRUCO</h1>
      <div className='grid grid-cols-2 grid-rows-1 min-h-full container mx-auto'>
        <NosContainer/>
        <EllosContainer/>
      </div>
      <ButtonNewGame/>
    </main>
  )
}
