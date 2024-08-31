import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Organizations from "../screens/Organizations";

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
        name="home"
        component={Home}
        options={{
            tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
            tabBarLabel: 'Início'
        }} 
      />
      <Tab.Screen 
        name="about" 
        component={Organizations} 
        options={{
            tabBarIcon: ({color, size}) => <Feather name="layers" color={color} size={size} />,
            tabBarLabel: 'Organizações'
        }} 
        />
      {/* <Tab.Screen 
        name="login" 
        component={Login} 
        options={{
            tabBarIcon: ({color, size}) => <Feather name="log-in" color={color} size={size} />,
            tabBarLabel: 'Login'
        }}
        /> */}
    </Tab.Navigator>
  );
}