'use client'
import { RecoilRoot } from 'recoil'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <RecoilRoot>
      <body className={inter.className}>{children}</body>
      </RecoilRoot>
    </html>
  )
}
