import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../themeContext';

export default function About() {
  const { themeStyles } = useTheme();

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>About</Text>
    </View>
  );
}
