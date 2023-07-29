import { Divider, Metric, Subtitle, Text } from "@tremor/react"
import Image from "next/image"
import Styles from '../styles/About.module.css'


export const metadata = {
  title: 'ssss',
  description: 'Genddddddp',
}

export default function About() {
  return (

    <div className={Styles.container}>

      <div className={Styles.texto}>
        <div className={Styles.titulo}><Metric>Sobre mi</Metric>
          <Image
            src="/images/avatar.svg"
            alt="Avatar Rafael"
            width={50}
            height={50}
            
          />
        </div>

        <Divider className="mt-2 mb-3"/>
        <div className={Styles.parrafo}>
          <p className="mb-4">Soy Programador Web. Me apasiona solucionar problemas y trabajar con datos.</p>
          <p className="mb-4">Uso herramientas de diseño gráfico para dar color a las interfaces de usuario y también para la impresión en gran formato y souvenirs.</p>
          <p className="mb-4">También tengo amplia experiencia en redes y hardware de computadoras.</p>
          <p className="mb-4">Soy una persona bien organizada, trabajo de forma independiente o en grupo.</p>
          <p className="mb-4">Me gusta leer, ver películas históricas y escuchar música de diferente género.</p>
        </div>
      </div>
      <div

      ></div>
    </div>

  )
}