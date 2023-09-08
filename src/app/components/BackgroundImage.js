'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Styles from '../styles/BackgroundImage.module.css'

export const BackgroundImage = () => {
    const { theme } = useTheme();
    const [imgBackground, setImgBackground] = useState(""); 
    const [isImageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            setImgBackground("/images/bk-mov.jpg"); // Actualizar el valor para el tema oscuro
        } else {
            setImgBackground("/images/bk-white.jpg"); // Actualizar el valor para el modo claro
        }
        setTimeout(() => {
            setImageLoaded(true);
        }, 2000); // Puedes ajustar el tiempo según tus necesidades
    }, [theme]);

    return (
        <div
            className={`${Styles['bkImage']} ${isImageLoaded ? Styles['imageLoaded'] : ''}`}
            style={{ backgroundImage: `url(${imgBackground})` }}
        ></div>
    );
};