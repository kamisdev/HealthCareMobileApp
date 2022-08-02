import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'
import TopBar from '../components/TopBar';

const AccountSettingScreen = (props) => {
  
  const [loading, setLoading] = useState(false);
   
  return (
    <View>
      <SafeAreaView>
        {loading && <LoadingOverlay />}
        <TopBar 
            title="Account Settings" 
            isArrowBack={true}
            onBack={() => {props.navigation.goBack()}}
        />
        <View>
            <Text style={styles.profileInformation}>
                Profile Information
            </Text>
        </View>
        <View>
          <View style={styles.form}>
            <Text style={styles.titleStyle}>First Name</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='John doe'
              placeholderTextColor={'#A1A1A1'}
              inputStyle={{ fontFamily: 'OpenSans-Light' }}
            />
            <Text style={styles.titleStyle}>Last Name</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='jo lo'
              placeholderTextColor={'#A1A1A1'}
              inputStyle={{ fontFamily: 'OpenSans-Light' }}
            />
            <Text style={styles.titleStyle}>Email Address</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='sample@gmail.com'
              placeholderTextColor={'#A1A1A1'}
              inputStyle={{ fontFamily: 'OpenSans-Light' }}
            />
            <Text style={styles.titleStyle}>Mobile Number</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='0236941200'
              placeholderTextColor={'#A1A1A1'}
              inputStyle={{ fontFamily: 'OpenSans-Light' }}
            />
            <Text style={styles.titleStyle}>Password</Text>
            <Input
              secureTextEntry={true}
              containerStyle={styles.inputContainerStyle}
              placeholder='*****'
              placeholderTextColor={'#A1A1A1'}
              inputStyle={{ fontFamily: 'OpenSans-Light' }}
            />
          </View>
          <View style={styles.buttonArea}>
            <RoundButton
              title="Save Information"
            />
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
    marginTop: 30
  },
  buttonArea: {
    alignSelf: 'center',
    width: '90%',
  },
  inputContainerStyle: {
    width: '90%',
    marginLeft: 20,
    marginBottom: 20
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
    marginTop: 15,
    fontFamily: 'OpenSans-Light'
  },
  bold: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'OpenSans-Bold'
  },
  signupParas: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  profileInformation: {
    fontSize: 25,
    fontFamily: 'OpenSans-Bold',
    marginTop: 20,
    marginLeft: 35
  }
});

export default AccountSettingScreen;
