import 'react-native-gesture-handler';
import Routes from './src/routes';
import { ThemeProvider } from './src/themeContext';
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
