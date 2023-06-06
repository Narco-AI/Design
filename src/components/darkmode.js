import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import useLocalStorage from 'use-local-storage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function MyApp() {

   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    }


  return (
      <>
      <IconButton sx={{ ml: 1 }} onClick={switchTheme} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </>
  );
}

export default function ToggleColorMode() {

   


  return (
        <MyApp />
  );
}