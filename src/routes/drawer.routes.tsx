import React, { useEffect, useState }  from 'react';
import { View, ActivityIndicator } from 'react-native';
import TabRoutes from './tab.routes';
import Map from '../screens/Map';
import StackRoutes from './stack.routes';
import CustomDrawerContent from './drawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import LogoutScreen from '../screens/Logout';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        setIsLoggedIn(!!accessToken);
      } catch (error) {
        console.error('Error checking login status', error);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    // Optionally, you can show a loader while checking the login status
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" /></View>;
  }
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
        name="feed"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
          drawerLabel: 'Início'
        }}
      />
      <Drawer.Screen 
        name="organizations"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="layers" color={color} size={size} />,
          drawerLabel: 'Organizações'
        }}
      />
      <Drawer.Screen 
        name="map"
        component={Map}
        options={{
          drawerIcon: ({color, size}) => <Feather name="map" color={color} size={size} />,
          drawerLabel: 'Organizações próximas'
        }}
      />
      {!isLoggedIn && (
        <Drawer.Screen 
          name="login"
          component={StackRoutes}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="log-in" color={color} size={size} />,
            drawerLabel: 'Login'
          }}
        />
      )}

      {isLoggedIn && (
        <Drawer.Screen 
          name="logout"
          component={LogoutScreen}
          options={{
            drawerIcon: ({ color, size }) => <Feather name="log-out" color={color} size={size} />,
            drawerLabel: 'Logout'
          }}
        />
      )}

    </Drawer.Navigator>
  );
}
