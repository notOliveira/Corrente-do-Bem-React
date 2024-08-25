import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import Map from '../screens/Map';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator>
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
            <Drawer.Screen 
                name="login"
                component={StackRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="log-in" color={color} size={size} />,
                    drawerLabel: 'Login'
                }}
            />
        
        </Drawer.Navigator>
    )
}
