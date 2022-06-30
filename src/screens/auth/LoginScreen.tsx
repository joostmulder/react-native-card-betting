import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import GradientBtn from '../../components/GradientBtn';
import {COLORS} from '../../constants';
import ForgotPassword from './ForgotPassword';
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

const LoginScreen = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ref_email = useRef<TextInput>();
  const ref_password = useRef<TextInput>();

  const handleModalVisibility = (value: boolean) => {
    setModalVisibility(value);
  };

  const handleLogin = () => {
    if (email === '') {
      Alert.alert('Empty Fields', 'Please enter a valid email.');
    } else if (password.length < 8) {
      Alert.alert('Invalid Password', 'Please enter password greater than 8.');
    } else {
      navigation.dispatch(StackActions.replace('Main'));
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}
      overScrollMode="never">
      <Wrapper>
        <View>
          <Logo
            source={require('../../../assets/images/logo.png')}
            resizeMode="contain"
          />
          {/* <LogoText>Matka Play</LogoText> */}
        </View>

        <Heading>Login to your Account</Heading>
        <Input
          placeholder="Enter email"
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => ref_password.current?.focus()}
          blurOnSubmit={false}
          ref={ref => (ref_email.current = ref!)}
        />
        <Input
          placeholder="Enter password"
          secureTextEntry
          onChangeText={value => setPassword(value)}
          value={password}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
          blurOnSubmit={false}
          ref={ref => (ref_password.current = ref!)}
        />

        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback onPress={() => setModalVisibility(true)}>
            <TextBtn>Forgot Password?</TextBtn>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.dispatch(StackActions.replace('SignUp'))}>
            <TextBtn>Don't have Account?</TextBtn>
          </TouchableWithoutFeedback>
        </View>

        <GradientBtn
          title="Login"
          textColor={COLORS.white}
          onPress={handleLogin}
          wrapStyle={{
            margin: 16,
          }}
        />

        <HelperText>Or Continue with</HelperText>

        <SocialLoginWrap>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => console.log('Google Pressed')}>
            <SocialLogo
              source={require('../../../assets/images/google-logo.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => console.log('Facebook Pressed')}>
            <SocialLogo
              source={require('../../../assets/images/facebook-logo.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </SocialLoginWrap>

        <ForgotPassword
          modalVisiblity={modalVisibility}
          setModalVisibility={handleModalVisibility}
        />
      </Wrapper>
    </ScrollView>
  );
};

export default LoginScreen;
