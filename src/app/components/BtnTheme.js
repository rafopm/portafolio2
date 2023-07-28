'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BiSolidMoon,BiSolidSun } from 'react-icons/bi';

const BtnTheme = () => {
  const { theme, setTheme } = useTheme('dark')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <BiSolidSun className='h-5 w-5 text-orange-300' />
      ) : (
        <BiSolidMoon className='h-5 w-5 text-color-secondary' />
      )}
    </button>
  )
}

export default BtnTheme