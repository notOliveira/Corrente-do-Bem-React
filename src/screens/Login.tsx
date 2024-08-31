import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useTheme } from '../themeContext';
import { loginUser } from '../services/authService';

export default function Login() {
  const { themeStyles } = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    await loginUser(email, password);
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
