import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants';
import MainScreen from '../screens/MainScreen';
import DrawerContent from './components/DrawerContent';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileScreen from '../screens/ProfileScreen';
import MpinScreen from '../screens/MpinScreen';
import MyHistoryScreen from '../screens/MyHistoryScreen';
import AccountStatementScreen from '../screens/AccountStatementScreen';
import FundsScreen from '../screens/FundsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HowToPlayScreen from '../screens/HowToPlayScreen';
import GameRateScreen from '../screens/GameRatesScreen';
import NoticeBoardScreen from '../screens/NoticeBoardScreen';
import SettingScreen from '../screens/SettingScreen';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => DrawerContent({...props})}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.headerColor,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={{
            title: "Matka Play",
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title: "My Profile",
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Generate MPIN"
        component={MpinScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="fiber-pin" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="My History"
        component={MyHistoryScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="history" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account Statement"
        component={AccountStatementScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcon name="clipboard-text" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Funds"
        component={FundsScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcon name="cash-multiple" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="notifications-active" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="How to Play"
        component={HowToPlayScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="perm-device-info" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Game Rates"
        component={GameRateScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcon name="cash-usd-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notice Board"
        component={NoticeBoardScreen}
        options={{
            title: "Notice Board / Rules",
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcon name="clipboard-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
