'use client'
import { Button, Card } from '@tremor/react';
import { SiMinutemailer } from "react-icons/si";
import { FaHandPointRight } from "react-icons/fa";
import { BsGithub, BsLinkedin,BsYoutube,BsTwitter } from "react-icons/bs";

import Styles from './styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  const handleRedirect = () => {
    history.push('/contactos');
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.elementos}>
        <div className={Styles.social}>

          <div class="flex items-center flex-row justify-center text-3xl " >
            <Link href="https://github.com/rafopm" passHref>
              <BsGithub class="mr-4 text-color-tertiary" />
            </Link >
            <Link href="" passHref>
            <BsYoutube class="mr-4 text-color-tertiary" />
            </Link>
            <Link href="" passHref>
            <BsTwitter class="mr-4 text-color-tertiary" />
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-pampavilca/" passHref>
              <BsLinkedin class="mr-4 text-color-tertiary" />
            </Link>

            
          </div>
        </div>
        <div className={Styles.cards}>

          <div  >
            <Card className={`max-w-md mx-auto opacity-75 ${Styles['card-hover']}`}>
              <p class="font-bold text-2xl text-color-secondary ">Hola, soy</p>
              <p class="font-bold text-3xl text-color-tertiary ">Rafael Pampavilca</p>
              <p class="font-bold text-2xl text-color-secondary ">Programador web</p>
              <div class="flex justify-end ">
                <Link href="/contactos" passHref>
                  <button class="mt-4 text-lg flex flex-row items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" ><FaHandPointRight class="mr-4 text-2xl" />Contáctame</button>
                </Link >
              </div>
            </Card>
          </div>
          <div>

          </div>
        </div>

        <div
          className={[
            "bg-cover bg-center absolute inset-0 bg-opacity-50",
          ]}
          style={{
            backgroundImage: `url(/images/bk-mov.jpg)`,
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
}