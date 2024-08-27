import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useTheme } from '../themeContext';

export default function Login() {
  const { themeStyles } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login vai aqui
    console.log('Email:', email);
    console.log('Password:', password);
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
        placeholderTextColor={themeStyles.placeholderText.color}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
