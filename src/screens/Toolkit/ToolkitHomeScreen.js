import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';

import LoadingOverlay from '../../components/LoadingOverlay';
import Images from '../../assets/Images'
import TopBar from '../../components/TopBar'

const ToolkitHomeScreen = (props) => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          {loading && <LoadingOverlay />}
          <View>
            <TopBar 
              title="Toolkit" 
              isAvatar={true}  
              isSearch={true} 
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
              <ScrollView contentContainerStyle={styles.scrollContent}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('Nutrition')}}>
                <Image
                  style={styles.toolkitImage}
                  source={Images.toolkit1}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('Foundation')}}>
                <Image
                  style={styles.toolkitImage}
                  source={Images.toolkit2}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.toolkitImage}
                  source={Images.toolkit3}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('Movement')}}>
                <Image
                  style={styles.toolkitImage}
                  source={Images.toolkit4}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('Meditation')}}>
                <Image
                  style={styles.toolkitImage}
                  source={Images.toolkit5}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    toolkitImage: {
      width: Dimensions.get('screen').width * 0.95,
      height: 180,
      marginVertical: 10,
    },
    scrollContent: {
      alignItems: 'center',
      paddingBottom: 250
    }
});

export default ToolkitHomeScreen;
