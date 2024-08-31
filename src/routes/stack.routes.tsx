import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ title: ''}}>
            <Stack.Screen 
                name="login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
