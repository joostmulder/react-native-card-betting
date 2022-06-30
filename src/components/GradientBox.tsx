import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {COLORS} from '../constants';

interface BoxProps {
  textColor?: string;
  gradientColors: string[];
  title: string;
  iconSrc: ImageSourcePropType;
}

const GradientBox = ({
  textColor = COLORS.white,
  gradientColors,
  title,
  iconSrc,
}: BoxProps) => {
  const Box = styled(TouchableOpacity)`
    width: ${Dimensions.get('window').width / 2 - 48}px;
    margin: 8px;
  `;

  const GradientWrap = styled(LinearGradient)`
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 15px;
    overflow: hidden;
  `;

  const BoxText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    color: ${textColor};
  `;

  const navigation = useNavigation();

  return (
    <Box
      onPress={() => {
        navigation.dispatch(
          StackActions.push('AddNumber', {title: `Starline ${title} Dashboard`}),
        );
      }}
      activeOpacity={0.9}>
      <GradientWrap
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={gradientColors}>
        <Image
          source={iconSrc}
          style={{width: 80, height: 80}}
          resizeMode="cover"
        />
        <BoxText>{title}</BoxText>
      </GradientWrap>
    </Box>
  );
};

export default GradientBox;
