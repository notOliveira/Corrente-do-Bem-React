import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    const loggedIn = await AsyncStorage.getItem('isLoggedIn');
    return loggedIn === 'true';
  } catch (error) {
    console.error('Error checking login status', error);
    return false;
  }
};

export const setLoginStatus = async (status: boolean): Promise<void> => {
  try {
    await AsyncStorage.setItem('isLoggedIn', status ? 'true' : 'false');
  } catch (error) {
    console.error('Error setting login status', error);
  }
};

export const clearLoginStatus = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('isLoggedIn');
  } catch (error) {
    console.error('Error clearing login status', error);
  }
};
