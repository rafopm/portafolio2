'use client'
import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import Styles from '../styles/BackgroundImage.module.css';

export const BackgroundImage = () => {
  const { theme } = useTheme();

  const [isImageLoaded, setImageLoaded] = useState(false);
  const imgBackground = theme === 'dark' ? '/images/bk-mov.jpg' : (theme === 'light' ? '/images/bk-white.jpg' : '');

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500); // Puedes ajustar el tiempo según tus necesidades
  }, []);

  return (

      <div
        className={`${Styles['bkImage']} ${isImageLoaded ? Styles['imageLoaded'] : ''}`}
        style={{ backgroundImage: `url(${imgBackground})` }}
      ></div>

  );
};
