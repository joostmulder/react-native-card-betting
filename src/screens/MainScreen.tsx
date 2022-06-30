import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import GradientBtn from '../components/GradientBtn';
import SimpleBtn from '../components/SimpleBtn';
import {COLORS} from '../constants';

import {StackActions, useNavigation} from '@react-navigation/native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/Card';
import Divider from '../components/Divider';

const Header = () => {
  const ButtonsWrapper = styled(View)`
    width: 100%;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 10px 16px;
  `;

  return (
    <View style={{marginBottom: 8}}>
      <ButtonsWrapper>
        <SimpleBtn
          title="ADD Funds"
          textColor={COLORS.headingColor}
          onPress={() => console.log('ADD Funds')}
          wrapStyle={{marginEnd: 10}}
          Icon={
            <MaterialCommunityIcon
              name="cash-multiple"
              size={24}
              color={COLORS.primaryBlue}
              style={{marginEnd: 10}}
            />
          }
        />
        <SimpleBtn
          title="99999-99999"
          textColor={COLORS.headingColor}
          onPress={() => console.log('Whatsapp')}
          Icon={
            <MaterialCommunityIcon
              name="whatsapp"
              size={24}
              color="#3ABF4C"
              style={{marginEnd: 5}}
            />
          }
        />
      </ButtonsWrapper>

      <ButtonsWrapper>
        <GradientBtn
          title="MILAN STARLINE"
          textColor={COLORS.headingColor}
          onPress={() => console.log('Milan')}
          wrapStyle={{marginEnd: 10}}
        />

        <GradientBtn
          title="KALYAN JACKPOT"
          textColor={COLORS.headingColor}
          onPress={() => console.log('Klyan')}

        />
      </ButtonsWrapper>

      <Divider/>
    </View>
  );
};


const MainScreen = () => {
  const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background: ${COLORS.bgLight};
  `;

  const navigation = useNavigation();

  const data = [
    {id: 'first'},
    {id: 'second'},
    {id: 'third'},
    {id: 'four'},
    {id: 'five'},
  ];
  return (
    <Wrapper>
      <FlatList
        data={data}
        contentContainerStyle={{paddingVertical:16, width: '100%'}}
        ListHeaderComponent={Header}
        renderItem={item => (
            <Card
            onPress={() => {
              navigation.dispatch(
                StackActions.push('Dashboard', {title: 'Starline Dashboard'}),
              );
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        overScrollMode="never"
      />
    </Wrapper>
  );
};

export default MainScreen;