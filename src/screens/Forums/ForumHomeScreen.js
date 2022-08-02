import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';

import LoadingOverlay from '../../components/LoadingOverlay';
import Forum from '../../components/Forum';
import TopBar from '../../components/TopBar';

const forums = [
  {
    image: require('../../assets/images/forum1.png'),
    title: 'Lupus',
    category: '30 COMMENTS'
  },
  {
    image: require('../../assets/images/forum2.png'),
    title: 'Women with Auto Immune Diseases',
    category: '30 COMMENTS'
  },
  {
    image: require('../../assets/images/forum1.png'),
    title: 'Lupus',
    category: '30 COMMENTS'
  },
  {
    image: require('../../assets/images/forum2.png'),
    title: 'Women with Auto Immune Diseases',
    category: '30 COMMENTS'
  },
  {
    image: require('../../assets/images/forum1.png'),
    title: 'Lupus',
    category: '30 COMMENTS'
  },
  {
    image: require('../../assets/images/forum2.png'),
    title: 'Women with Auto Immune Diseases',
    category: '30 COMMENTS'
  }
];

const ForumHomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TopBar 
              title="Welcome" 
              isAvatar={true}
              isEdit={true}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            {loading && <LoadingOverlay />}
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
              <View style={styles.forums}>
                {forums.map((forum, index) => (
                  <TouchableOpacity
                    onPress={() => {props.navigation.navigate('ForumDetails')}}
                    key={index} 
                    style={styles.forum}
                  >
                    <Forum forum={forum} />
                  </TouchableOpacity>
                ))}
              </View>
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
    //forums
    forums: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 15,
    },
    forum: {
      width: '48%',
      marginTop: 5,
      marginBottom: 5
    },
});

export default ForumHomeScreen;
