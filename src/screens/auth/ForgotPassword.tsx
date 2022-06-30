import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import styled from 'styled-components';
import GradientBtn from '../../components/GradientBtn';
import {COLORS} from '../../constants';
import {Heading, HelperText, Input} from './styles';

interface Props {
  modalVisiblity: boolean;
  setModalVisibility(value: boolean): void;
}

const ForgotPassword = ({modalVisiblity, setModalVisibility}: Props) => {

  const [email, setEmail] = useState("");

  const ScreenOverlay = styled(View)`
    flex: 1
    align-items: center;
    justify-content: center;
  `;
  const CardWrapper = styled(View)`
    align-items: center;
    width: 90%;
    justify-content: center;
    background-color: ${COLORS.bgLight};
    border-radius: 15px;
    padding: 20px;
    elevation: 5;
  `;

  const CloseBtn = styled(TouchableOpacity)`
      position: absolute;
      top: 10px;
      right: 20px;
  `

  return (
    <Modal animationType="slide" transparent={true}
    visible={modalVisiblity}
    onRequestClose={()=> setModalVisibility(false)}>
      <TouchableWithoutFeedback onPress={()=> setModalVisibility(false)}>
      <ScreenOverlay>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <CardWrapper>
          <Heading>Forgot Password</Heading>
          <Input
            placeholder="Enter email"
            keyboardType="email-address"
            onChangeText={(value)=> setEmail(value)}
            value={email}
            width={95}
            blurOnSubmit={false}
          />
          <GradientBtn
          title="Send"
          textColor={COLORS.white}
          onPress={()=> {}}
        />
          <HelperText>
            * Password reset link will be send to your email.
          </HelperText>
          <CloseBtn onPress={()=> setModalVisibility(false)}>
              <Text style={{fontSize:20,}}>X</Text>
          </CloseBtn>
        </CardWrapper>
      </TouchableWithoutFeedback>
      </ScreenOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ForgotPassword;
