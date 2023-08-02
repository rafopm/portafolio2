'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ProgressBar,
  Card,
  Flex,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Divider,
  Title,
  Subtitle,
} from "@tremor/react";
import { FcSmartphoneTablet, FcDataConfiguration } from "react-icons/fc";
import { RxMix } from "react-icons/rx";


import React from 'react'
import Styles from '../styles/Tools.module.css'
import { BsTools } from "react-icons/bs";
import Trail from "../components/TrailSpringTexto";


export default function Tools() {
  const [frontData, setFrontData] = useState([]);
  const [backendData, setBackendData] = useState([]);
  const [otrosData, setOtrosData] = useState([]);
  console.log(frontData.front);
  const router = useRouter();

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.front);
        setFrontData(data.front);
        setBackendData(data.backend);
        setOtrosData(data.otros);
      });

  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.tabs}>
        <div><div className={Styles.titulo}><Metric className="dark:text-color-tertiary">SKills</Metric>
          <BsTools className="text-4xl dark:text-color-tertiary" />
        </div>

          <Divider className="mt-2 mb-3" />
        </div>
        <div>
          <Card className="dark:bg-color-text-dark ">
            <TabGroup>

              <TabList className="mt-4 ">
                <Tab className="" >
                  <Trail>
                    <FcSmartphoneTablet className=" text-2xl" />
                    <div className=" text-2xl "> Frontend</div>
                  </Trail>
                </Tab>
                <Tab >
                  <Trail>
                    <FcDataConfiguration className=" text-2xl" /><div className=" text-2xl">Backend</div>
                  </Trail>
                </Tab>
                <Tab >
                  <Trail>
                    <RxMix className=" text-2xl" /><div className="text-2xl">Otros</div>
                  </Trail>
                </Tab>
              </TabList>

              <TabPanels>

                <TabPanel>

                  {frontData.length >= 0 && frontData.map((front, i) => (
                    <div key={front.id} className="mt-4">
                      <Flex className="mt-4">
                        <Subtitle className=" text-gray-900 w-full dark:text-white " > {front.name}</Subtitle>
                        <Flex className="space-x-2" justifyContent="end">

                          <Text>{front.nivel}%</Text>

                        </Flex>
                      </Flex>
                      <ProgressBar value={front.nivel} color="blue" className="mt-2" />
                    </div>
                  ))}

                </TabPanel>

                <TabPanel>
                  {backendData.length > 0 && backendData.map((backend, i) => (
                    <div key={backend.id} className="mt-4">
                      <Flex className="mt-4">
                        <Subtitle className=" text-gray-900  w-full dark:text-white"> {backend.name}</Subtitle>
                        <Flex className="space-x-2" justifyContent="end">
                          <Text>{backend.nivel}%</Text>
                        </Flex>
                      </Flex>
                      <ProgressBar value={backend.nivel} color="blue" className="mt-2" />
                    </div>
                  ))}


                </TabPanel>

                <TabPanel>
                  {otrosData.length > 0 && otrosData.map((otros, i) => (
                    <div key={otros.id} className="mt-4">
                      <Flex className="mt-4">
                        <Subtitle className=" text-gray-900  w-full dark:text-white"> {otros.name}</Subtitle>
                        <Flex className="space-x-2" justifyContent="end">
                          <Text>{otros.nivel}%</Text>
                        </Flex>
                      </Flex>
                      <ProgressBar value={otros.nivel} color="blue" className="mt-2" />
                      <Flex className="space-x-2" justifyContent="end">
                        <Text>{otros.detalle}</Text>
                      </Flex>
                    </div>
                  ))}


                </TabPanel>


              </TabPanels>
            </TabGroup>
          </Card>
        </div>
      </div>
    </div>
  )
}
