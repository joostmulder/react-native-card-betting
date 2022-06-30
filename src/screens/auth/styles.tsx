import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from 'react-native';
  import styled from 'styled-components';
  import {COLORS} from '../../constants';
  import LinearGradient from 'react-native-linear-gradient';

  interface InputProps{
      width?: string | number
  }

export const Wrapper = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${COLORS.bgLight};
  `;

  export const Logo = styled(Image)`
    height: 120px;
  `;

export const LogoText = styled(Text)`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${COLORS.headingColor};
    margin-top: -10px;
    margin-bottom: 40px;
  `;

export const Heading = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.headingColor};
    margin-bottom: 20px;
  `;

export const Input = styled(TextInput)`
    width: ${({width = (88)}: InputProps) => width}%;
    background-color: ${COLORS.btnBgLight};
    color: #3b3b3b;
    font-size: 16px;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 12px;
    elevation: 1;
  `;

export  const TextBtn = styled(Text)`
    font-size: 14px;
    color: ${COLORS.primaryBlue};
    font-weight: 600;
    margin-top: 6px;
  `;

export  const HelperText = styled(Text)`
    font-size: 14px;
    color: ${COLORS.headingColor};
    font-weight: 400;
  `;

export  const SocialLoginWrap = styled(View)`
    width: 100%;
    justify-content: space-evenly;
    padding: 16px;
    flex-direction: row;
  `;

export const SocialLogo = styled(Image)`
    width: 100px;
    height: 35px;
  `;
