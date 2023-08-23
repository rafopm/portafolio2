import './globals.css'
import { Raleway } from 'next/font/google'
import Providers from './providers'
import Menu from './components/Menu'
import { BackgroundImage } from './components/BackgroundImage'


const rale = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Pampavilca - Programador web',
  description: 'Portafolio para que me conozcan mis intereses y habilidades.',
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


            {children}


          </main>
          <BackgroundImage />
          {/* Footer */}
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
