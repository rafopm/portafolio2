
import { Card, Divider, Metric, Title } from "@tremor/react"
import Styles from '../styles/About.module.css'
import { BsEmojiSmile, BsFillPersonFill } from "react-icons/bs";
import Trail from "../components/TrailSpringTexto";



export const metadata = {
  title: 'Rafael Pampavilca - Programador web - Sobre Mi',
  description: 'Un poco de mi para que me conozcan como persona.',
}

export default function About() {



  return (

    <div className={Styles.container}>

      <div className={Styles.texto}>
        <div className={Styles.titulo}><Metric className="dark:text-tertiary text-tertiary  ">Sobre mi</Metric>
          <BsFillPersonFill className="text-4xl dark:text-tertiary text-tertiary" />
        </div>
      </div>
      <Divider className="mt-2 mb-3" />
      <div>

        <div className={Styles.parrafo}>
          <Card className="dark:bg-color-text-dark ">
            <div className="flex flex-row  ">
              <Trail >
                <Metric className="mr-5 dark:text-color-secondary">¡Hola! </Metric>
              </Trail>
              <Trail >
                <BsEmojiSmile className="text-3xl dark:text-color-secondary" />
              </Trail>
            </div>

            <Title className="mb-4">Soy un apasionado Programador Web, siempre en busca de emocionantes retos y fascinantes problemas por resolver. Me encuentro en mi elemento trabajando con datos y encontrando soluciones creativas que den vida.
              ¿Sabes qué más puedo hacer? ¡Darle vida a tus diseños con herramientas de diseño gráfico y llevarlos a la realidad en formatos impresos o en hermosos souvenirs!</Title>
            <Title className="mb-4">También tengo una amplia experiencia en el mundo de las redes y el hardware de computadoras.</Title>
            <Title className="mb-4">Una de las cosas que me hace destacar es mi capacidad de organización, lo que me permite trabajar tanto de manera independiente como en equipo de forma efectiva. La colaboración es una parte esencial de mi enfoque, pero también puedo llevar un proyecto desde el principio hasta el final por mi cuenta.</Title>
            <Title className="mb-4">Aunque mi mente está enfocada en la tecnología, mi corazón también se nutre con otras pasiones. Me encanta sumergirme en la literatura, disfrutar de películas históricas que me transportan a épocas pasadas y deleitarme con diversos géneros musicales. ¡Ah! Y no puedo olvidar mencionar que, en ocasiones, me convierto en un hábil músico tocando la quena, un instrumento oriundo del Perú.</Title>
            <Title className="mb-4">Espero que mi breve presentación te haya permitido conocerme mejor. Siempre estoy emocionado por nuevas oportunidades y desafíos. Si tienes alguna idea en mente o algún proyecto en el que podamos colaborar, ¡estaré encantado de escuchar más sobre ello! Gracias por visitar mi portafolio web.</Title>
          </Card>
        </div>

      </div>
      <div

      >


      </div>
    </div>

  )
}
