import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Dropdown } from 'react-native-element-dropdown';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import Images from '../assets/Images';
import {foundations} from '../../redux/constants/configConstants';

const FirstScreen = (props) => {

  const [foundation, setFoundation] = useState(foundations[0].value);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])
  
  return (
    <View style={styles.container}>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                Choose your {'\n'} Foundation
              </Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.descriptionText}> 
                Support your favorite Non-Profit today. A
                percentage of all of your in-app purchases
                will go to the foundation of your choice. 
              </Text>
            </View>
            <View style={{ marginTop: '10%' }}>
              <Dropdown
                dropdownPosition='bottom'
                style={styles.dropdown}
                containerStyle={styles.dropdownContainerStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={foundations}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={foundation}
                onChange={item => {
                  setFoundation(item.value);
                }}
              />
            </View>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Next"
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              />
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  contentView: {
    alignItems: 'center',
  },

  titleView: {
    justifyContent: "center",
    alignItems: 'center',
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'OpenSans-Bold',
    marginLeft: '20%',
    marginTop: '18%'
  },

  descriptionText: {
    marginTop: '20%',
    fontSize: 18,
    color:'white',
    marginHorizontal: '10%',
    fontFamily: 'OpenSans-Light',
    alignSelf: 'center'
  },

  buttonArea: {
    justifyContent: "center",
    width: '90%',
    marginTop: 150
  },

  dropdown: {
    height: 50,
    borderRadius: 20,
    width: 300,
    backgroundColor: '#ffffff',
  },

  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 20
  },
  
  dropdownContainerStyle: {
    borderRadius: 20,
  }
});

export default FirstScreen;