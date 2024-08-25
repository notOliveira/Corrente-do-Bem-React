import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import About from "../screens/About";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
    // Removing header from all screens
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
            tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
            tabBarLabel: 'Início'
        }} 
      />
      <Tab.Screen 
        name="About" 
        component={About} 
        options={{
            tabBarIcon: ({color, size}) => <Feather name="info" color={color} size={size} />,
            tabBarLabel: 'Sobre'
        }} 
        />
      <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{
            tabBarIcon: ({color, size}) => <Feather name="log-in" color={color} size={size} />,
            tabBarLabel: 'Login'
        }}
        />
    </Tab.Navigator>
  );
}