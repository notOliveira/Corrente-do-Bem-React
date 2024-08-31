import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

// Cria uma instância do axios com as configurações padrão
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona um interceptador para adicionar o token de autenticação
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Função para login
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/login/', { email, password });
    await AsyncStorage.setItem('accessToken', response.data.access);
    await AsyncStorage.setItem('refreshToken', response.data.refresh);
    await AsyncStorage.setItem('isLoggedIn', 'true');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para obter organizações do usuário
export const getUserOrganizations = async () => {
  try {
    const response = await apiClient.get('/organizations/current_user_organizations/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Adicione mais funções para outras requisições API conforme necessário
