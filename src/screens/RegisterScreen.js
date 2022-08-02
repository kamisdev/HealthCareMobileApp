import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import { Input } from 'react-native-elements';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'

const SignupScreen = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const onLogin = () => {
    // if (email === '' || password === '') {
    //   return;
    // }
    props.navigation.navigate('HearAboutUs');
  }
  return (
    <View>
      <BackgroundImage backgroundImage={Images.main_bg_signup} />
      <SafeAreaView>
        {loading && <LoadingOverlay />}
        <View>
          <View style={styles.form}>
            <Text style={styles.titleStyle}>First Name</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your first name'
              placeholderTextColor={'#A1A1A1'}
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <Text style={styles.titleStyle}>Last Name</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your last name'
              placeholderTextColor={'#A1A1A1'}
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <Text style={styles.titleStyle}>Email Address</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your email address'
              placeholderTextColor={'#A1A1A1'}
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <Text style={styles.titleStyle}>Phone Number</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your phone number'
              placeholderTextColor={'#A1A1A1'}
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <Text style={styles.titleStyle}>Password</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your password'
              placeholderTextColor={'#A1A1A1'}
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
          </View>
          <View style={styles.buttonArea}>
            <RoundButton
              title="Create Account"
              onPress={() => {
                onLogin();
              }}
            />
          </View>
          <View>
              <Text style={styles.socialArea}>or sing up with</Text>
          </View>
          <View style={styles.socialIcons}>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.facebookIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.googleIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.appleIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signupParas}>
            <Text style={styles.signupTxt}>
              Already Have An Account? &nbsp;
            </Text>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Login')}}>
              <Text style={styles.bold}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#A5593C',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginLeft: 40
  },
  form: {
    marginTop: 250
  },
  buttonArea: {
    alignSelf: 'center',
    width: '90%',
  },
  inputContainerStyle: {
    width: '90%',
    marginLeft: 25,
    marginBottom: 20
  },
  forgetPwd: {
    alignSelf: 'flex-end',
    marginRight: 35,
  },
  forgetTxt: {
    color: '#9CA3B7'
  },
  leftIconContainerStyle: {
    left: -10
  },
  socialArea: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#6E6E6E'
  },
  socialImage: {
    width: 50,
    height: 50
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  },
  signupTxt: {
    color: '#141414',
    fontSize: 20,
    marginTop: 15
  },
  bold: {
    fontFamily: 'OpenSans-Light',
    fontSize: 20,
    marginTop: 15
  },
  signupParas: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default SignupScreen;
