'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import styles from '../styles/BackgroundImage.module.css'; 

export const BackgroundImage = () => {
    // const { theme } = useTheme();

    // const backgroundImageDark = "/images/bk-mov.jpg";
    // const backgroundImageLight = "/images/bk-white.jpg";

    // const backgroundImage = theme === ("dark") ? backgroundImageDark : backgroundImageLight;

    // const [showImage, setShowImage] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShowImage(true);
    //     }, 200);

    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <div
            className={[
                "bg-cover bg-center absolute inset-0 bg-opacity-50",
            ]}

            style={{
                backgroundImage: `url(/images/bk-mov.jpg)`, 
                zIndex: -1,
            }}
        ></div>
    );
}
