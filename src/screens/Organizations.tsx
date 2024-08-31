import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useTheme } from '../themeContext';
import { checkLoginStatus } from '../services/authService'; // Importa a função do serviço
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  login: undefined;
  // Adicione outras rotas se necessário
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'login'>;

export default function Organizations() {
  const { themeStyles } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyLoginStatus = async () => {
      const loggedIn = await checkLoginStatus();
      if (loggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigation.navigate('login'); // Redireciona para a tela de login
      }
    };

    verifyLoginStatus();
  }, [navigation]);

  if (isLoggedIn === null) {
    // Mostra um loader enquanto verifica o estado de autenticação
    return (
      <View style={themeStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Organizations</Text>
    </View>
  );
}
