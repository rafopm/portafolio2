'use client'
import { Card } from '@tremor/react';
import { FaHandPointRight } from "react-icons/fa";
import Styles from './styles/Home.module.css'
import Link from 'next/link';
import TextoAnimado from './components/TextoAnimado';
import { Redes } from './components/Redes';
import Trail from './components/TrailSpringTexto';
import { useSpring, animated } from '@react-spring/web';



export default function Home() {
  const cardSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Duración de la animación en milisegundos (0.5 segundos)
    delay: 500, // Retraso de 500 milisegundos antes de que comience la animación
  });
  return (
    <div className={Styles.container}>

      <div className={Styles.elementos}>
        <div className={Styles.social}>

          <Redes />

        </div>
        <div className={`${Styles.cards} ml-16 `}>

          <div className={`${Styles.card} max-w-md mx-auto opacity-90 ${Styles['cardHover']}`}>

            <animated.div style={cardSpring} >
              <Card className={`${Styles.bloque} max-w-md mx-auto opacity-90 `}>
              </Card>
            </animated.div>
            <Trail posicionEjeX={-300} altoObjeto={35}>
              <p className="font-bold text-2xl text-secondary ">Hola, soy</p>
              <p className="font-bold text-3xl dark:text-tertiary ">Rafael Pampavilca</p>
              <p className="font-bold text-2xl text-secondary ">Programador web</p>
            </Trail>


            <div className="flex justify-end ">
              <Link href="/contactos" passHref>
                <Trail posicionEjeX={300} altoObjeto={60}>
                  <button className=" mt-4 mr-20 text-lg dark:text-dark bg-color-tertiary flex flex-row items-center font-semibold py-2 px-4 border border-gray-900 rounded shadow hover:scale-110 hover:brightness-20 transition-transform duration-300 ease-in-out transform-gpu">
                    <FaHandPointRight className="mr-4 text-2xl " />Contáctame
                  </button>
                </Trail>
              </Link >
            </div>
          </div>

          <div>
            <div className={Styles.cardOcultar}>
              <animated.div style={cardSpring} >
                <TextoAnimado text="Rafael * Pampavilca * ">
                  <img className={Styles.imageAnimar} src="images/avatar.svg" alt="Avatar" />
                </TextoAnimado>
              </animated.div>
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