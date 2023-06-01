import { AnotadorProvider } from '@/context/AppContext'
import './globals.css'
import { Corben } from '@next/font/google'
import { MyContextProps } from "../context/AppContext"

const corben = Corben({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Anotador Truco',
  description: 'Development by: Enzo Alderete',
}

export default function RootLayout({
  children,
  win,
  setWin,
  winner,
  setWinner,
  pointsEllos,
  setPointsEllos,
  pointsNos,
  setPointsNos,
  RestartGame,
  esMayorNos,
  setEsMayorNos,
  esMayorEllos,
  setEsMayorEllos,
  isOpen,
  setIsOpen,
  openModal,
  closeModal,
}: {
  children: React.ReactNode,
  // Agrega todas las variables requeridas como propiedades aquí
  win: string,
  setWin: React.Dispatch<React.SetStateAction<string>>,
  winner: boolean,
  setWinner: React.Dispatch<React.SetStateAction<boolean>>,
  pointsEllos: number,
  setPointsEllos: React.Dispatch<React.SetStateAction<number>>,
  pointsNos: number,
  setPointsNos: React.Dispatch<React.SetStateAction<number>>,
  RestartGame: () => void,
  esMayorNos: boolean,
  setEsMayorNos: React.Dispatch<React.SetStateAction<boolean>>,
  esMayorEllos: boolean,
  setEsMayorEllos: React.Dispatch<React.SetStateAction<boolean>>,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  openModal: () => void,
  closeModal: () => void,
}) {
  return (
    <html lang="en">
      <AnotadorProvider
        Win={win}
        setWin={setWin}
        winner={winner}
        setWinner={setWinner}
        pointsEllos={pointsEllos}
        setPointsEllos={setPointsEllos}
        pointsNos={pointsNos}
        setPointsNos={setPointsNos}
        RestartGame={RestartGame}
        esMayorNos={esMayorNos}
        setEsMayorNos={setEsMayorNos}
        esMayorEllos={esMayorEllos}
        setEsMayorEllos={setEsMayorEllos}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <body className={corben.className}>{children}</body>
      </AnotadorProvider>
    </html>
  )
}
