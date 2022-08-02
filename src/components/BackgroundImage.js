import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions } from 'react-native';

const BackgroundImage = (props) => {

  const {
    backgroundImage, 
    isProfile = false,
    isRecipeDetail = false
  } = props;

  return (
    <Image
      style={isProfile ? styles.profileBackground : (isRecipeDetail ? styles.recipeBackground : styles.backgroundImage)}
      source={backgroundImage}
    />
  );
}

export default BackgroundImage;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch'
  },
  profileBackground: {
    position: 'absolute',
    left: 0,
    top: Dimensions.get('screen').height * -0.5,
    width: Dimensions.get('screen').width * 1.7,
    resizeMode: 'contain'
  },
  recipeBackground: {
    position: 'absolute',
    left: Dimensions.get('screen').width / -4,
    top: Dimensions.get('screen').height / -8,
    width: Dimensions.get('screen').width * 1.5,
    resizeMode: 'contain',
    borderRadius: 500
  }
});
