import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import MainNavigation from './src/navigations/MainNavigation';
import {LogBox } from 'react-native';



const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';
  LogBox.ignoreLogs(['Reanimated 2']);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MainNavigation/>
  );
};

export default App;
