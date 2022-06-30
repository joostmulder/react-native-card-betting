import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Image,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {COLORS} from '../constants';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientBtn from '../components/GradientBtn';
import GradientBox from '../components/GradientBox';

const DashboardScreen = () => {
  const Wrapper = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
  `;

  return (
      <ScrollView overScrollMode='never'> 
    <Wrapper>
      <GradientBox
        iconSrc={require('../../assets/images/single-dice.png')}
        title="Single Digit"
        gradientColors={["#00B4DB","#0083B0" ]}
      />

      <GradientBox
        iconSrc={require('../../assets/images/double-dice.png')}
        title="Double Digit"
        gradientColors={["#11998e", "#38ef7d"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/single-spade.png')}
        title="Single Panna"
        gradientColors={["#FF416C", "#FF4B2B"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/double-spade.png')}     
        title="Double Panna"
        gradientColors={["#DA22FF", "#9733EE"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/triple-spade.png')}
        title="Triple Panna"
        gradientColors={["#B24592", "#F15F79"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/gear2.png')}
        title="SP Motor"
        gradientColors={["#ec008c", "#fc6767"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/gear.png')}
        title="DP Motor"
        gradientColors={["#00F260", "#0575E6"]}

      />
      <GradientBox
        iconSrc={require('../../assets/images/half-heart.png')}
        title="Half Sangam"
        gradientColors={["#f857a6", "#ff5858"]}
      />
      <GradientBox
        iconSrc={require('../../assets/images/full-heart.png')}
        title="Full Sangam"
        gradientColors={["#16BFFD", "#CB3066"]}
      />
    </Wrapper>
    </ScrollView>
  );
};

export default DashboardScreen;