'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import Providers from './providers'
import Menu from './components/Menu'
import PageWrapper from './pageWrapper'

const rale = Raleway({ subsets: ['latin'] })

export const metadata = {

  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={rale.className}>
        <Providers>
          {/* Header */}
          <header >
            <Menu />
          </header>
          {/* Page */}
          <main>
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          {/* Footer */}
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}