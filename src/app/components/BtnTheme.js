'use client'

import { useEffect, useState } from 'react'
import {  useTheme } from 'next-themes'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import Styles from '../styles/BtnTheme.module.css'

const BtnTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [theme])

  if (!mounted) {
    return null
  }

  return (
    <>
      <button className={Styles.darkModeButtonTop}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <BiSolidSun className={`  h-8 w-8 text-orange-300`} />
        ) : (
          <BiSolidMoon className={`  h-8 w-8 text-white`} />
        )}
      </button>
      <button className={Styles.darkModeButtonBottom}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <BiSolidSun className={`  h-8 w-8 text-orange-300`} />
        ) : (
          <BiSolidMoon className={`  h-8 w-8 text-white`} />
        )}
      </button>
      </>
  )
}

export default BtnTheme