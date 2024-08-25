import { StyleSheet } from 'react-native';

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

export const darkTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#303030',
  },
  title: {
    ...baseStyles.title,
    color: '#fff',
  },
});

export const lightTheme = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: '#fff',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
});
