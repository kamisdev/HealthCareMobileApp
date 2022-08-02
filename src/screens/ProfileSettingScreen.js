import React, {useEffect, useState} from 'react';
import {
            View, 
            StyleSheet, 
            SafeAreaView, 
            TouchableOpacity,
            Text,
            Image
        } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images';
import BackgroundImage from '../components/BackgroundImage';
import { ScrollView } from 'react-native-gesture-handler';

const userInfo = {
    name: 'Elize Salazar',
    avatar: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
    location: 'San Francisco, CA'
}

const ProfileSettingScreen = (props) => {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
    }, [])
    
    return (
      <View>
        <BackgroundImage 
            isProfile={true}
            backgroundImage={Images.main_bg_profile} 
        />
        <SafeAreaView>
          <View style={styles.container}>
            {loading && <LoadingOverlay />}
            <View style={styles.topbar}>
                <TouchableOpacity 
                    onPress={() => {props.navigation.goBack()}}
                >
                    <MaterialIcons 
                        name="arrow-back" 
                        size={30} 
                        color="#ffffff" 
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.profileInfo}>
                <Avatar
                    containerStyle={styles.avatar}
                    rounded
                    source={{uri: userInfo.avatar}}
                    size={120}
                /> 
                <View style={styles.captions}>
                    <Text style={styles.profileName}>{userInfo.name}</Text>
                    <Text style={styles.location}>{userInfo.location}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonCaption}>
                            See your profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.profileBody}>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                                source={Images.mySubscription}
                            />
                            <Text style={styles.settingText}>My Subscriptions</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {props.navigation.navigate('AccountSettings')}} 
                    >
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                                source={Images.accountSetting}
                            />
                            <Text style={styles.settingText}>Account Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                                source={Images.helpCenter}
                            />
                            <Text style={styles.settingText}>Help Center</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                                source={Images.aboutUs}
                            />
                            <Text style={styles.settingText}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                                source={Images.contacts}
                            />
                            <Text style={styles.settingText}>Contacts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingItem}>
                            <Image
                                style={styles.iconStyle}
                            />
                            <Text style={styles.settingText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
          </View>   
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      fontFamily: 'OpenSans-Light',
      marginBottom: 100
    },
    topbar: {
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 10,
        fontFamily: 'OpenSans-Bold',
    },
    profileInfo: {
        marginLeft: 25,
        flexDirection: 'row',
        marginTop: 70,
    },
    profileName: {
        fontSize: 25,
        color: '#ffffff',
        fontFamily: 'OpenSans-Bold'
    },
    location: {
        color: '#ffffff',
        alignSelf: 'center',
        marginBottom: 3,
        fontFamily: 'OpenSans-Light'
    },
    button: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    buttonCaption: {
        color: '#A7A7A7',
        fontFamily: 'OpenSans-Light'
    },
    captions: {
        marginLeft: 20,
        marginTop: 12
    },
    settingItem: {
        flexDirection: 'row',
        backgroundColor: '#ECEAEA',
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 5,
        height: 60
    },
    profileBody: {
        marginTop: 40,
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginTop: 9,
        marginLeft: 20
    },
    settingText: {
        marginTop: 13,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: 'OpenSans-Light'
    },
});

export default ProfileSettingScreen;
