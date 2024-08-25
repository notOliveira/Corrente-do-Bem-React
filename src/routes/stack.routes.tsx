import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import Map from '../screens/Map';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ title: ''}}>
            <Stack.Screen 
                name="home"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
