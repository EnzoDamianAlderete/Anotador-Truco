import { ButtonNewGame } from '@/components/ButtonNewGame'
import { EllosContainer } from '@/containers/ElllosContainer'
import { NosContainer } from '@/containers/NosContainer'

export default function Home() {
  return (
    <main className='text-center flex flex-col font-bold text-white text-2xl'>
      <h1>ANOTADOR TRUCO</h1>
      <div className='grid grid-cols-2 divide-x text-white'>
        <NosContainer/>
        <EllosContainer/>
      </div>
      <ButtonNewGame/>
    </main>
  )
}
