'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import iconMoon from '../public/images/icon-moon.svg';
import iconSun from '../public/images/icon-sun.svg';
import Image from 'next/image';

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className='relative object-contain h-6 w-6 cursor-pointer'
      // onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Image
          src={iconSun}
          alt='sun icon'
          fill
          onClick={() => setTheme('light')}
        />
      ) : (
        <Image
          src={iconMoon}
          alt='moon icon'
          fill
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default ToggleDarkMode;
