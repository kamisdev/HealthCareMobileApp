import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoadingOverlay from '../../components/LoadingOverlay';
import TopBar from '../../components/TopBar';
import VideoCard from '../../components/VideoCard';

const videos = [
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
  {
    thumbnail: require('../../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    period: 30
  },
]

const Movement = (props) => {
  return (
    <View style={styles.section}>
        <Input
            containerStyle={styles.inputContainerStyle}
            placeholder='search and filter'
            placeholderTextColor={'#A1A1A1'}
            leftIcon={
            <MaterialIcons
                name='search'
                size={24}
                color='#707070'
            />
            }
        />
      <View style={styles.videos }>
        { videos.map((video, index) =>
        <View style={{ width: '48%', marginBottom: 10 }} key={index}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('FullScreenVideo')}}
          >
            <VideoCard videoData={video} />
            <Text style={styles.timeCaption}>{video.period + 'min'}</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
    </View>
  )
}

const MovementScreen = (props) => {
    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TopBar 
              title="Movement Archives" 
              isArrowBack={true}
              onBack={() => {props.navigation.goBack()}}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            {loading && <LoadingOverlay />}
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
              <Movement navigation={props.navigation} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      fontFamily: 'OpenSans-Light',
    },
    //General
    section: {
      padding: 15,
    },
    //Movement
    description: {
      color: '#989898',
      fontSize: 15,
      marginTop: 10
    },
    videos: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 15,
    },
    timeCaption: {
      color: '#9CA3B7'
    },
    inputContainerStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#A1A1A1',
        marginBottom: 10
    }
});

export default MovementScreen;
