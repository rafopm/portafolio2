'use client'
import { Bold, Callout, Card, Divider, Flex, Metric, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import Trail from "../components/TrailSpringTexto";
import Styles from '../styles/Projects.module.css'
import { useSpring, animated } from '@react-spring/web';

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const router = useRouter();


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "TODOS"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);



  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        setProjectData(data.projects);
      });

  }, []);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const fadeIn = useSpring({
    from: { opacity: 0 }, // Opacidad inicial
    to: { opacity: 1 },   // Opacidad final
    config: { duration: 1000 }, // Duración de la animación en milisegundos
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div>
          <div className={Styles.titulo}><Metric className="dark:text-tertiary ">Proyectos</Metric>
            <AiFillProject className="text-4xl dark:text-tertiary " />
          </div>
        </div>
      </div>
      <Divider className="mt-2 mb-3" />
      <div>
        <div className="m-2 ">
          <div className={Styles.filterButtons}>
            <button
              className={`${Styles.filterButton} ${selectedCategory === "TODOS" ? Styles.activeFilter : ""
                }`}
              onClick={() => handleCategoryChange("TODOS")}
            >
              TODOS
            </button>
            <button
              className={`${Styles.filterButton} ${selectedCategory === "FRONTEND" ? Styles.activeFilter : ""
                }`}
              onClick={() => handleCategoryChange("FRONTEND")}
            >
              FRONTEND
            </button>
            <button
              className={`${Styles.filterButton} ${selectedCategory === "BACKEND" ? Styles.activeFilter : ""
                }`}
              onClick={() => handleCategoryChange("BACKEND")}
            >
              BACKEND
            </button>
            <button
              className={`${Styles.filterButton} ${selectedCategory === "FULL STACK" ? Styles.activeFilter : ""
                }`}
              onClick={() => handleCategoryChange("FULL STACK")}
            >
              FULL STACK
            </button>
          </div>


          <div className={Styles.cardsContainer}>

            {filteredProjects.length >= 0 && filteredProjects.map((project, i) => (


              <animated.div key={project.id} style={fadeIn}>
                <Card key={project.id} className={`dark:bg-color-text-dark hover:scale-105 hover:brightness-10 transition-transform duration-300 ease-in-out transform-gpu   ${Styles.card}`} >
                  <div className={Styles.cardData}>
                    <Text className="dark:text-secondary font-bold">{project.category}</Text>
                    <Metric>{project.title}</Metric>
                    <Callout className="mt-4" title={`Tools: ${project.tools}`} color="teal">
                      {project.description}
                    </Callout>
                    <Flex className="mt-4">
                      <Text className="w-full">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="dark:text-tertiary max-w-full text-color-text-dark font-bold">
                          DEMO
                        </a>
                      </Text>
                      <Flex className="space-x-2 " justifyContent="end">
                        <Text>
                          <a href={project.repositorio} target="_blank" rel="noopener noreferrer " className="dark:text-tertiary max-w-full text-color-text-dark font-bold">
                            REPOSITORIO
                          </a>
                        </Text>
                      </Flex>
                    </Flex>
                  </div>
                  <div
                    className={`mt-5 ${Styles.cardImage}`}
                    onClick={() => handleImageClick(`/images/projects/${project.id}.png`)}
                  >
                    {/* Agregar un elemento visual o texto indicando que se puede hacer clic en la imagen */}
                    <div className={Styles.clickOverlay}>Haz clic para ampliar</div>
                    <img src={`/images/projects/${project.id}.png`} alt={project.title} />
                  </div>
                </Card>
              </animated.div>

            ))}
          </div>
        </div>
      </div>
      {enlargedImage && (
        <div className={Styles.enlargedImageOverlay} onClick={handleCloseEnlargedImage}>
          <img src={enlargedImage} alt="Enlarged Project Image" className={Styles.enlargedImage} />
        </div>
      )}
    </div>
  )
}
