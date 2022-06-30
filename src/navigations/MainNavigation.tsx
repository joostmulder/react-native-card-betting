import { NavigationContainer, RouteProp, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useState } from 'react'
import { Image, StatusBar, View } from 'react-native'
import { COLORS } from '../constants';
import AddNumberScreen from '../screens/AddNumberScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerNav from './DrawerNav';

type RootStackParamList = {
  Main: undefined;
  Dashboard: { title: string };
  AddNumber: { title: string };
  Login: undefined;
  SignUp: undefined
};

const MainNavigation = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

  const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.headerColor} />

      {/* <SignUpScreen/> */}

      {isLoggedIn ? (
         <Stack.Navigator
         initialRouteName="Login" screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.headerColor,
          },
        }}  >
           <Stack.Screen name="Main" component={DrawerNav} options={{headerShown: false}} />
           <Stack.Screen name="Dashboard" component={DashboardScreen} options={props=> ({title: props.route.params.title})} />
          <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="AddNumber" component={AddNumberScreen} options={props=> ({title: props.route.params.title})} />

       </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    )
}

export default MainNavigation
