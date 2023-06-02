import { AnotadorProvider } from '@/context/AppContext'
import './globals.css'
import { Corben } from '@next/font/google'

const corben = Corben({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Anotador Truco',
  description: 'Delopment by: Enzo Alderete',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={corben.className}>
        <AnotadorProvider>
          {children}
        </AnotadorProvider>
        </body>
      
    </html>
  )
}
