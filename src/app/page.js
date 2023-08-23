
import { Card } from '@tremor/react';
import { FaHandPointRight } from "react-icons/fa";
import Styles from './styles/Home.module.css'
import Link from 'next/link';
import TextoAnimado from './components/TextoAnimado';
import { Redes } from './components/Redes';
import Trail from './components/TrailSpringTexto';

export const metadata = {
  title: 'Rafael Pampavilca - Programador web - Home',
  description: 'Portafolio para que me conozcan mis intereses y habilidades.',
}

export default function Home() {

  return (
    <div className={Styles.container}>
      
      <div className={Styles.elementos}>
        <div className={Styles.social}>

          <Redes color="text-color-tertiary" />

        </div>
        <div className={Styles.cards}>

          <div className={Styles.card}>
            <Card className={`max-w-md mx-auto opacity-75 ${Styles['cardHover']}`}>
              <Trail>
                <p className="font-bold text-2xl text-color-secondary  ">Hola, soy</p>
                <p className="font-bold text-3xl dark:text-color-tertiary ">Rafael Pampavilca</p>
                <p className="font-bold text-2xl text-color-secondary ">Programador web</p>
              </Trail>

              <div className="flex justify-end ">
                <Link href="/contactos" passHref>
                  <button className=" border-2 mt-4 text-lg dark:text-color-text-dark bg-color-tertiary flex flex-row items-center font-semibold py-2 px-4 border border-gray-900 rounded shadow">
                    <FaHandPointRight className="mr-4 text-2xl " />Contáctame
                  </button>
                </Link >
              </div>
            </Card>
          </div>

          <div>
            <div className={Styles.cardOcultar}>
              <TextoAnimado text="Rafael * Pampavilca * ">
                <img className={Styles.imageAnimar} src="images/avatar.svg" alt="Avatar" />
              </TextoAnimado>
            </div>
          </div>
          <div>

          </div>
        </div>

        {/* <div
          className={[
            "bg-cover bg-center absolute inset-0 bg-opacity-50",
          ]}
          style={{
            backgroundImage: `url(/images/bk-mov.jpg)`,
            zIndex: -1,
          }}
        ></div> */}
      </div>
    </div>
  );
}