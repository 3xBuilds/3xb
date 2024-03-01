import type { Metadata } from 'next'
import { Inter, Audiowide } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const audio = Audiowide(
  { subsets: ['latin'], weight: ['400'] }
)

export const metadata: Metadata = {
  title: '3xBuilds',
  description: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={audio.className + "  w-screen overflow-x-hidden noscr "}>{children}</body>
    </html>
  )
}
