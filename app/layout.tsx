import type { Metadata, Viewport } from 'next'
import { Space_Mono, Ranchers, Anton, Teko } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
})

const ranchers = Ranchers({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ranchers'
})

const anton = Anton({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton'
})

const teko = Teko({ 
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-teko'
})

export const metadata: Metadata = {
  title: 'HYPHUNT | Stop Swiping on Ghosts',
  description: 'Hyperlocal discovery platform. Real people. Real places. Real time.',
  generator: 'v0.app',
  icons: {
    icon: '/images/hyphunt-icon.png',
    apple: '/images/hyphunt-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${ranchers.variable} ${anton.variable} ${teko.variable} bg-[#000000]`}>
      <body className="font-mono antialiased bg-[#000000] text-[#CCFF00]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  )
}
