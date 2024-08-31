import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const useLogout = () => {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      // Remove tokens from AsyncStorage
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      
      // Redirect to login screen
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return logout;
};

export default useLogout;