import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";
// import TabRoutes from "./tab.routes";


export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    );
}