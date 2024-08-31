import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const performLogout = async () => {
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

    performLogout();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
