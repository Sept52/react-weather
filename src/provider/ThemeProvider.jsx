import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ChangeCssRootVariable } from '../model/ChangeCssRootVariable';
import { storage } from '../model/Storage';

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(storage.getItem("theme") || "light");

  ChangeCssRootVariable(theme);

  function changeThemee(theme) {
    storage.setItem("theme", theme);
    setTheme(theme);
    ChangeCssRootVariable(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeThemee,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
