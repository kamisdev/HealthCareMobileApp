import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoadingOverlay from '../../components/LoadingOverlay';
import TopBar from '../../components/TopBar'

const foundations = [
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        avatar: require('../../assets/images/temp/avatar.png'),
        title: 'KPC Foundation',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
]

const FoundationScreen = (props) => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          {loading && <LoadingOverlay />}
          <View>
            <TopBar 
              title="Foundation Resources" 
              isArrowBack={true}
              onBack={() => {props.navigation.goBack()}}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                { foundations.map((item, index) => 
                    <Foundation
                        key={index}
                        avatar={item.avatar}
                        title={item.title}
                        description={item.description}
                    />
                )}
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
}

const Foundation = (props) => {

    const {avatar, title, description} = props;

    return (
        <View style={styles.container}>
            <View>
                <Avatar
                    containerStyle={styles.avatar}
                    rounded
                    source={avatar} ///  {uri: avatar}
                    size="medium"
                /> 
            </View>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemContext}>{description.slice(0, 55)}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        style={{ marginTop: 20 }}
                        name="dots-vertical" 
                        size={35} 
                        color="#9D9D9D"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        marginHorizontal: 30,
        alignItems: 'center',
    },

    scrollContent: {
      alignItems: 'center',
      paddingBottom: 280,
      paddingHorizontal: 20
    },

    itemTitle: {
        color: '#A5593C',
        fontFamily: 'OpenSans-Light',
        fontSize: 15,
        marginHorizontal: 15,
        marginBottom: -10,
        marginTop: 20
    },

    itemContext: {
        marginVertical: 8,
        color: '#989898',
        fontFamily: 'OpenSans-Light',
        fontSize: 12,
        marginHorizontal: 15
    },

    avatar: {
        marginLeft: 12,
        marginTop: 20
    },
});

export default FoundationScreen;
