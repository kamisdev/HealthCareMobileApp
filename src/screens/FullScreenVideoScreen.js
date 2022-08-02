import React from 'react';
import VideoPlayer from "react-native-video-player";
import { View, Dimensions, Image, Text } from 'react-native';
import Images from '../assets/Images';

export const FullScreenVideoScreen = () => {
    return (
      <View style={styles.container}>
        <VideoPlayer
          video={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          autoplay={true}
          controls={false}
          resizeMode={'cover'}
        />
      </View>
    );
  };
  
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#000000',
      justifyContent: 'center'
    },
    video: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width * (9 / 16),
      backgroundColor: 'black',
    }
  };
