'use client'
import { Bold, Callout, Card, Divider, Flex, Metric, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import Styles from '../styles/Projects.module.css'

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.projects);
        setProjectData(data.projects);
      });

  }, []);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div>
          <div className={Styles.titulo}><Metric className="dark:text-color-tertiary">Proyectos</Metric>
            <AiFillProject className="text-4xl dark:text-color-tertiary" />
          </div>
        </div>
      </div>
      <Divider className="mt-2 mb-3" />
      <div>
        <div className="m-2 ">

          <div className={Styles.cardsContainer}>

            {projectData.length >= 0 && projectData.map((project, i) => (
              <Card key={project.id} className={`dark:bg-color-text-dark   ${Styles.card}`} >
                <div className={Styles.cardData}>
                  <Text className="dark:text-color-secondary ">{project.category}</Text>
                  <Metric>{project.title}</Metric>
                  <Callout className="mt-4" title={`Tools: ${project.tools}`} color="teal">
                    {project.description}
                  </Callout>
                  <Flex className="mt-4">
                    <Text className="w-full">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="max-w-full">
                        Demo
                      </a>
                    </Text>
                    <Flex className="space-x-2 " justifyContent="end">
                      <Text>
                        <a href={project.repositorio} target="_blank" rel="noopener noreferrer">
                          Repositorio
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
