import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import NavBar from './NavBar'
import { Suspense } from 'react'
import AuthProvider from './auth/Provider'
import Script from 'next/script'
import LayoutScript from '@/layoutScript'


const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: '--font-poppins',

});

export const metadata: Metadata = {
  title: 'Avatar Store',
  description: 'Created by Huabin Hou',
  openGraph: {
    title: "",
    description: ""
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //<html lang="en" data-theme="dark"></html>
    <html lang="en" data-theme="winter">
      <LayoutScript />

      {
        //< className={poppins.className}>
      }
      <body className={poppins.variable}>
        <AuthProvider>
          <NavBar />
          <main className='p-5'>

            {children}

          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
