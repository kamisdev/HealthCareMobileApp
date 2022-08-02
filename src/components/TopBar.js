import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntiDesign from 'react-native-vector-icons/AntDesign';

const userInfo = {
    name: 'Elize',
    avatar: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg'
}

const unreadCount = 5;

const TopBar = (props) => {
    
    const {
        title, 
        isAvatar, 
        isArrowBack, 
        isBell, 
        isEdit, 
        isSearch,
        onBack,
        isBookMark,
        isSharealt,
        onAvatarClick
    } = props;
    
    return (
      <View style={styles.topBar}>
        { isAvatar &&
            <TouchableOpacity
                onPress={() => {onAvatarClick()}}
            >
                <Avatar
                    containerStyle={styles.avatar}
                    rounded
                    source={{uri: userInfo.avatar}}
                    size="medium"
                /> 
            </TouchableOpacity>
        }
        { isArrowBack && 
            <TouchableOpacity 
                style={styles.arrowBack} 
                onPress={() => onBack()}
            >
                <MaterialIcons 
                    name="arrow-back" 
                    size={30} 
                    color="#ffffff" 
                />
            </TouchableOpacity>
        }
        <Text style={styles.titleTxt}>
            {title}
        </Text>
        {
            title === 'Welcome' && 
            <Text style={styles.user}>{',  ' + userInfo.name}</Text>
        }
        { isBell && 
            <TouchableOpacity style={styles.Icon} >
                <EvilIcons 
                    name="bell" 
                    size={40} 
                    color="#ffffff" 
                />
                <Badge
                    status="warning"
                    value={unreadCount}
                    containerStyle={{ position: 'absolute', top: -3, right: -4 }}
                />
            </TouchableOpacity>
        }
        { isSearch && 
            <TouchableOpacity style={styles.Icon} > 
                <Feather 
                    name="search" 
                    size={35} 
                    color="#ffffff" 
                />
            </TouchableOpacity>
        }
        { isEdit && 
            <TouchableOpacity style={styles.Icon}>
                <Feather 
                    name="edit" 
                    size={35} 
                    color="#ffffff"
                />
            </TouchableOpacity>
        }
        { isBookMark && 
            <TouchableOpacity style={styles.Icon2}>
                <Feather 
                    name="bookmark" 
                    size={25} 
                    color="#ffffff"
                />
            </TouchableOpacity>
        }
        { isSharealt && 
            <TouchableOpacity style={styles.Icon1}>
                <AntiDesign 
                    name="sharealt" 
                    size={25} 
                    color="#ffffff"
                />
            </TouchableOpacity>
        }
      </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#A5593C',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row'
    },
    titleTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: '#ffffff',
        marginLeft: 10,
        marginTop: 30
    },
    user: {
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 30
    },
    avatar: {
        marginLeft: 12,
        marginTop: 20
    },
    Icon: {
        marginTop: 25,
        position: 'absolute',
        right: 15
    },
    Icon2: {
        marginTop: 30,
        position: 'absolute',
        right: 50
    },
    Icon1: {
        marginTop: 30,
        position: 'absolute',
        right: 15
    },
    arrowBack: {
        marginTop: 30,
        marginLeft: 5
    }
});

export default TopBar;
