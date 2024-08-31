import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useTheme } from '../themeContext';
import { loginUser } from '../api/api';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { themeStyles } = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      console.log('Login successful');
      navigation.navigate('Home');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Login</Text>

      <TextInput
        style={themeStyles.input}
        placeholder="Email"
        placeholderTextColor={themeStyles.placeholderText.color}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={themeStyles.input}
        placeholder="Senha"
        placeholderTextColor={themeStyles.placeholderText.color}
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
