import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

interface LoginResponse {
  access: string;
  refresh: string;
}

interface LoginResult {
  success: boolean;
  data?: LoginResponse;
  error?: string;
}

export const loginUser = async (email: string, password: string): Promise<LoginResult> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login/`, { email, password });
    const { access, refresh } = response.data;

    // Armazenar tokens
    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);
    await AsyncStorage.setItem('isLoggedIn', 'true');

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Erro na requisição:', error);
    return { success: false, error: (error as Error).message };
  }
};
