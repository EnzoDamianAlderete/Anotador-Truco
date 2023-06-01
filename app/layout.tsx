import { AnotadorProvider } from '@/context/AppContext'
import './globals.css'
import { Corben } from '@next/font/google'
import { MyContextProps } from "../context/AppContext"

const corben = Corben({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Anotador Truco',
  description: 'Development by: Enzo Alderete',
}

interface RootLayoutProps extends MyContextProps {
  children: React.ReactNode
}

export function RootLayout({
  children,
  Win,
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
}: RootLayoutProps) {
  return (
    <html lang="en">
      <AnotadorProvider
        Win={Win}
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

export default RootLayout;