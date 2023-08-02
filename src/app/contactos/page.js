'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Styles from '../styles/Contactos.module.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { Card, Divider, Metric, Text, Title } from '@tremor/react';
import { AiFillContacts } from 'react-icons/ai';
import { Redes } from '../components/Redes';
import Trail from '../components/TrailSpringTexto';


export default function Contactos() {
  const form = useRef();
  const SERVICEID = process.env.NEXT_PUBLIC_SERVICIO;
  const TEMPLATEID = process.env.NEXT_PUBLIC_TEMPLATE;
  const PUBLICKEYID = process.env.NEXT_PUBLIC_PUBLICKEY;

  const [successMessage, setSuccessMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    const formData = new FormData(form.current);
    const name = formData.get('Nombre');
    const email = formData.get('Email');
    const message = formData.get('Mensaje');


    if (!name || !email || !message) {
      alert('Por favor, ingresa todos los campos.');
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }

    setIsFormDisabled(true);

    emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, PUBLICKEYID)
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Mensaje enviado correctamente.');
        form.current.reset();
        setIsFormDisabled(false);
      })
      .catch((error) => {
        console.log(error.text);
        alert('Ocurrió un error mientras se enviaba el mensaje. Por favor, intenta otra vez.');
        setIsFormDisabled(false);
      });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>

        <div className={Styles.titulo}><Metric className="dark:text-color-tertiary">Contactos</Metric>
          <AiFillContacts className="text-4xl dark:text-color-tertiary" />
        </div>
      </div>
      <div >
        <div>
          <Divider className="mt-0 mb-3" />
        </div>


        <div className={Styles.bodyContainer}>

          <div className="w-full  max-w-md mx-450 rounded-lg pt-0  p-8 mt-1">
            <div className="flex flex-row mb-4  ">
              <Trail >
                <Metric className="mr-5 dark:text-color-secondary">¡Escríbeme! </Metric>
              </Trail>
              <Trail >

              </Trail>
            </div>
            {successMessage ? (
              <div className="mt-4 text-green-500 font-bold">{successMessage}</div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-color-text-ligth" htmlFor="Nombre">
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"

                    name="Nombre"
                    required
                    disabled={isFormDisabled}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-color-text-ligth" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"

                    name="Email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    disabled={isFormDisabled}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-color-text-ligth" htmlFor="Mensaje">
                    Mensaje
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"
                    name="Mensaje"
                    required
                    rows={8}
                    disabled={isFormDisabled}
                  />
                </div>
                <div className="flex justify-end">
                  <input
                    className={`bg-color-secondary hover:bg-color-primary text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    type="submit"
                    value="Enviar"
                    disabled={isFormDisabled}
                  />
                </div>
              </form>
            )}
          </div>

          <div className={Styles.cardsContainer}>
            <Card className={`${Styles.card} max-w-xs mx-auto h-25`} decoration="top" decorationColor="indigo">
              <Metric>Redes</Metric>
              <Divider />
              <Redes color="text-color-primary" />
            </Card>
            <Card className="max-w-xs mx-auto " decoration="top" decorationColor="indigo">
              <Metric>Email</Metric>
              <Divider />
              <Title className='text-center'>rafopm@outlook.com</Title>

            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}