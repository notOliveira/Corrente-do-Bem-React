import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../themeContext';

export default function Organizations() {
  const { themeStyles } = useTheme();

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Organizations</Text>
    </View>
  );
}
