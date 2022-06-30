import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, Dimensions, Easing, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {COLORS} from '../constants';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from './Divider';

interface Props{
    onPress(): void
}

const Card = ({onPress}: Props) => {
  const CardWrapper = styled(View)`
    max-width: 100%;
    padding: 8px 16px;
  `;

  const CardGradient = styled(LinearGradient)`
    width: 100%;
    border-radius: 15px;
    elevation: 2;
    justify-content: flex-start;
    overflow: hidden;
  `;

  const Header = styled(View)`
    width: 100%;
    background-color: ${COLORS.secondaryBlue}50;
    padding: 6px;
  `;

  const HeadingText = styled(Animated.Text)`
    width: 550px;
    color: ${COLORS.headingColor};
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    text-align: center;
  `;
  const TimeText = styled(Text)`
    color: red;
  `;

  const Body = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const LeftContent = styled(View)`
    flex: 0.7;
    justify-content: center;
    align-items: center;
  `;
  const RightContent = styled(View)`
    flex: 0.3;
    justify-content: center;
    align-items: center;
    opacity: 0.3;
  `;

  const translateAnim = useRef(
    new Animated.Value(Dimensions.get('window').width - 50),
  ).current;

  const transformStyle = {
    transform: [
      {
        translateX: translateAnim,
      },
    ],
  };

  useEffect(() => {
    TranslateAnim();
  }, []);

  const TranslateAnim = () => {
    Animated.loop(
      Animated.timing(translateAnim, {
        useNativeDriver: true,
        toValue: -551,
        duration: 18000,
        easing: Easing.linear,
      }),
    ).start();
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <CardWrapper>
      <CardGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#eaeaea', '#dbdbdb', '#dbdbdb', '#eaeaea']}>
        <Header>
          <Animated.View>
            <HeadingText numberOfLines={1} style={transformStyle}>
              Starline Supreme Day (<TimeText> Open Time - 10:00 A.M. </TimeText>-
              <TimeText> Close Time - 10:00 P.M. </TimeText>)
            </HeadingText>
          </Animated.View>
        </Header>
        <Body>
          <LeftContent>
            <HeadingText style={{fontWeight: "bold"}}>Supreme Day</HeadingText>
            <Divider/>
            <HeadingText>***-**-***</HeadingText>
            <Divider/>
            <HeadingText style={{color: 'green', fontSize: 14}}>
              Betting Running Now
            </HeadingText>
          </LeftContent>

          <RightContent>
            <MaterialCommunityIcon
              name="google-play"
              color={COLORS.secondaryBlue}
              size={80}
            />
          </RightContent>
        </Body>
      </CardGradient>
    </CardWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Card;
