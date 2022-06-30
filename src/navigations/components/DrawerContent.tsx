import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import {LogoText} from '../../screens/auth/styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { StackActions, useNavigation } from '@react-navigation/native';

const DrawerContent = ({...props}: DrawerContentComponentProps) => {

  

  return (
    <DrawerContentScrollView style={{backgroundColor: COLORS.bgLight}}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <LogoText>Matka Play</LogoText>
      </View>
      <DrawerItemList {...props} />

      <View
        style={{
            marginBottom: 40 ,
        }}>
        <TouchableOpacity activeOpacity={0.9}
        style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding:12
        }}
        onPress={()=> props.navigation.dispatch(StackActions.push("Login"))}>
          <Text style={{fontWeight: 'bold', fontSize:14, marginEnd: 10}}>Logout</Text>
          <MaterialIcon name="logout" size={24} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
