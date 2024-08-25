import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../themeContext';

export default function CustomDrawerContent(props) {
  const { toggleTheme } = useTheme();
  const icon = useTheme().theme === 'dark' ? 'moon' : 'sun';


  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Alterar Tema"
        icon={({ color, size }) => <Feather name={icon} color={color} size={size} />}
        onPress={() => {
          toggleTheme();
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}
