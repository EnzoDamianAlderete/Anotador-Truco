import { AnotadorProvider } from '@/context/AppContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anotador Truco',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AnotadorProvider>
      <body className={inter.className}>{children}</body>
      </AnotadorProvider>
    </html>
  )
}