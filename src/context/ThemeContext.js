import { createContext } from 'react';
import React, { useState } from 'react';

const ThemeContext = createContext();

const initialTheme='light'
const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.checked === false) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const datatheme = {theme, handleTheme};

  return <ThemeContext.Provider value={datatheme}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;
