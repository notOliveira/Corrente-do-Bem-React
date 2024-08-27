import React, { createContext, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

const ThemeContext = createContext('dark');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

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

// Estilos base
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  placeholderText: {
    color: '#888',
  },
});

// Estilos para o tema escuro
const darkTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#303030',
  },
  title: {
    ...baseStyles.title,
    color: '#fff',
  },
  input: {
    ...baseStyles.input,
    backgroundColor: '#505050',
    borderColor: '#707070',
    color: '#fff',
  },
  button: {
    color: '#1E90FF',
  },
  placeholderText: {
    color: '#bbb',
  },
});

// Estilos para o tema claro
const lightTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#fff',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  input: {
    ...baseStyles.input,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    color: '#000',
    
  },
  button: {
    color: '#1E90FF',
  },
  placeholderText: {
    color: '#888',
  },
});
