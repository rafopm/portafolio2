import './globals.css'
import { Raleway } from 'next/font/google'
import Providers from './providers'
import Menu from './components/Menu'
import { BackgroundImage } from './components/BackgroundImage'
import BtnTheme from './components/BtnTheme'

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
          <BtnTheme />
          <Menu />
          <BackgroundImage />
          {children}
          
        </Providers>
      </body>
    </html>
  )
}
