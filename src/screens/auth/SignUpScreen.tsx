import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import GradientBtn from '../../components/GradientBtn';
import {COLORS} from '../../constants';
import {
  Wrapper,
  Logo,
  LogoText,
  Heading,
  Input,
  TextBtn,
  SocialLoginWrap,
  SocialLogo,
  HelperText,
} from './styles';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const ref_name = useRef<TextInput>();
  const ref_email = useRef<TextInput>();
  const ref_mobile = useRef<TextInput>();
  const ref_password = useRef<TextInput>();
  const ref_confirmPass = useRef<TextInput>();

  const navigation = useNavigation();

  const handleSignUp = () => {
    if (name === '' && email === '' && phone === '') {
      Alert.alert('Empty Fields', 'Please enter all fields.');
    } else if (password.length < 8 && confirmPassword.length < 8) {
      Alert.alert('Invalid Password', 'Please enter password greater than 8.');
    } else if (password != confirmPassword) {
      Alert.alert("Passwords don't match", 'Please enter same password.');
    } else {
      navigation.dispatch(StackActions.replace('Main'));
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled">
      <Wrapper>
        <View>
          <Logo
            source={require('../../../assets/images/logo.png')}
            resizeMode="contain"
          />
          {/* <LogoText>Matka Play</LogoText> */}
        </View>

        <Heading>Create new your Account</Heading>
        <Input
          placeholder="Name"
          onChangeText={value => setName(value)}
          value={name}
          returnKeyType="next"
          onSubmitEditing={() => ref_email.current?.focus()}
          blurOnSubmit={false}
          ref={ref => (ref_name.current = ref!)}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => ref_mobile.current?.focus()}
          blurOnSubmit={false}
          ref={ref => (ref_email.current = ref!)}
        />
        <Input
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={value => setPhone(value)}
          value={phone}
          returnKeyType="next"
          onSubmitEditing={() => ref_password.current?.focus()}
          blurOnSubmit={false}
          ref={ref => (ref_mobile.current = ref!)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={value => setPassword(value)}
          value={password}
          returnKeyType="next"
          onSubmitEditing={() => ref_confirmPass.current?.focus()}
          blurOnSubmit={false}
          ref={ref => (ref_password.current = ref!)}
        />
        <Input
          placeholder="Confirm password"
          secureTextEntry
          onChangeText={value => setConfirmPassword(value)}
          value={confirmPassword}
          returnKeyType="done"
          onSubmitEditing={handleSignUp}
          blurOnSubmit={false}
          ref={ref => (ref_confirmPass.current = ref!)}
        />

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View></View>
          <TouchableWithoutFeedback
            onPress={() => navigation.dispatch(StackActions.replace('Login'))}>
            <TextBtn>Already have Account?</TextBtn>
          </TouchableWithoutFeedback>
        </View>

        <GradientBtn
          title="SignUp"
          textColor={COLORS.white}
          onPress={handleSignUp}
          wrapStyle={{
            marginVertical: 16,
          }}
        />

        <HelperText>Or Continue with</HelperText>

        <SocialLoginWrap>
          <TouchableWithoutFeedback>
            <SocialLogo
              source={require('../../../assets/images/google-logo.png')}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <SocialLogo
              source={require('../../../assets/images/facebook-logo.png')}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </SocialLoginWrap>
      </Wrapper>
    </ScrollView>
  );
};

export default SignUpScreen;
