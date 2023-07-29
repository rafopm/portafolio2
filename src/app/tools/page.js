'use client'
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

} from "@tremor/react";
import { FcSmartphoneTablet, FcDataConfiguration } from "react-icons/fc";
import React from 'react'
import Styles from '../styles/Tools.module.css'

const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.tabs}>
        <div><div className={Styles.titulo}><Metric>SKills</Metric>

        </div>

          <Divider className="mt-2 mb-3" />
        </div>
        <div>
          <TabGroup>
            <TabList className="mt-4">
              <Tab ><FcSmartphoneTablet className=" text-2xl" /><div className="text-lg"> Frontend</div></Tab>
              <Tab ><FcDataConfiguration className=" text-2xl" /><div className="text-lg">Backend</div> </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-4">
                  <Flex className="mt-4">
                    <Text className="w-full">Product Y</Text>
                    <Flex className="space-x-2" justifyContent="end">
                      <Text>$ 108,799</Text>
                      <Text>38%</Text>
                    </Flex>
                  </Flex>
                  <ProgressBar value={38} className="mt-2" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-4">
                  <Flex className="mt-4">
                    <Text className="w-full">Product Z</Text>
                    <Flex className="space-x-2" justifyContent="end">
                      <Text>$ 99,484</Text>
                      <Text>16%</Text>
                    </Flex>
                  </Flex>
                  <ProgressBar value={12} className="mt-2" />
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  )
}

export default page