import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle, Dimensions} from 'react-native';
import styled from 'styled-components';
import {COLORS} from '../constants';

interface Props {
  onPress(): void;
  title: string;
  textColor: string;
  wrapStyle?: StyleProp<ViewStyle>;
  Icon?: any;
}

const SimpleBtn = ({title, textColor, onPress, wrapStyle, Icon}: Props) => {
  const [btnTitle, setBtnTitle] = useState(title);
  
  const BtnWrap = styled(TouchableOpacity)`
    min-width: 120px;
    min-height: 50px;
    background-color: ${COLORS.btnBgLight};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    elevation: 1;
    padding: 12px 20px;
    margin: 2px;
    elevation: 1;
  `;
  const BtnText = styled(Text)`
    font-size: ${Dimensions.get("window").width > 365 ? 16 : 14}px;
    color: ${textColor};
    font-weight: 600;
  `;
 
 
 useEffect(() => {
  if (title.length > 15) {
    setBtnTitle(title.slice(0, 12) + '...');
  } else {
    setBtnTitle(title);
  }
}, []);



  return (
      <BtnWrap activeOpacity={0.9} onPress={onPress} style={wrapStyle}>
      {Icon && Icon}
        <BtnText  numberOfLines={1}>{btnTitle}</BtnText>
      </BtnWrap>
  );
};

export default SimpleBtn;
