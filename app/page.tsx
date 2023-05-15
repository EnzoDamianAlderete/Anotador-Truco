import { EllosContainer } from '@/containers/ElllosContainer'
import { NosContainer } from '@/containers/NosContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-center flex flex-col text-red-400'>
      <h1>ANOTADOR TRUCO</h1>
      <div className='flex flex-row align-middle justify-center text-red-100'>
        <NosContainer/>
        <EllosContainer/>
      </div>
    </main>
  )
}
