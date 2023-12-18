import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import { Suspense } from 'react'
import AuthProvider from './auth/Provider'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avatar Store',
  description: 'Created by Huabin Hou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //<html lang="en" data-theme="dark"></html>
    <html lang="en" data-theme="winter">

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RFNX3HTB3Y" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RFNX3HTB3Y');`}
      </Script>
      <body className={inter.className}>
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
