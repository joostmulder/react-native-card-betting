import React, {useEffect,useState} from 'react';
import {
  Dimensions,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {COLORS} from '../constants';

interface Props {
  title: string;
  textColor: string;
  wrapStyle?: StyleProp<ViewStyle>;
  onPress(): void;
  Icon?: any;
}

const GradientBtn = ({title, textColor, onPress, wrapStyle, Icon}: Props) => {
  const [btnTitle, setBtnTitle] = useState(title);

  const LinearGradientBtn = styled(LinearGradient)`
    min-width: 120px;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 12px 20px;
    elevation: 1;
  `;
  const BtnText = styled(Text)`
    font-size: ${Dimensions.get("window").width > 370 ? 16 : 14}px;
    color: ${textColor};
    font-weight: 600;
  `;

  useEffect(() => {
    if (title.length > 15) {
      setBtnTitle(title.slice(0, 10) + '...');
    } else {
      setBtnTitle(title);
    }
  }, []);



  return (
    <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPress}
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin:2
            },
            wrapStyle,
          ]}>
      <LinearGradientBtn
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.primaryBlue, COLORS.secondaryBlue]}>
        
          {Icon && Icon}
          <BtnText numberOfLines={1}>{btnTitle}</BtnText>
      </LinearGradientBtn>
      </TouchableOpacity>

  );
};

export default GradientBtn;
