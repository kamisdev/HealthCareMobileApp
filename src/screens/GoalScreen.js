import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Dimensions, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import Images from '../assets/Images';

const GoalScreen = (props) => {

  const onSelectGoal = (id) => {
    props.navigation.navigate('Welcome');
  }
  
  return (
    <View>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                What goal do you {'\n'} have in mind?
              </Text>
            </View>
            <View style={styles.scrollView}>
              <TouchableOpacity onPress={() => {onSelectGoal(0)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal1}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {onSelectGoal(1)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal2}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {onSelectGoal(2)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal3}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentView: {
    alignItems: 'center',
    marginTop: '15%'
  },

  titleView: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: '5%'
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'OpenSans-Bold',
    marginLeft: '25%',
  },

  goal: {
    width: Dimensions.get('screen').width * 0.95,
    height: 160,
    marginVertical: '2%',
    
  },

  scrollView: {
    marginTop: '10%'
  }
});

export default GoalScreen;