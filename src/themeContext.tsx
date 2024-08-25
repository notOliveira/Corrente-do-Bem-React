import React, { createContext, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

const ThemeContext = createContext('dark');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#303030',
  },
  title: {
    ...baseStyles.title,
    color: '#fff',
  },
});

const lightTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#fff',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
});
