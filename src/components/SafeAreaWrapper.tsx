import React from 'react';
import {View, Platform, StatusBar,} from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../constants';

interface Props {
    children: React.ReactNode
}

const SafeAreaWrapper = (props: Props) => {
  const SafeAreaWrap = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    background-color: ${COLORS.bgLight};
  `;

  return (
    <SafeAreaWrap>
        {props.children}
    </SafeAreaWrap>
  );
};

export default SafeAreaWrapper;
