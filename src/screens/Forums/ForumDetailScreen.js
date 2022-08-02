import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Text, Dimensions, TextInput} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import LoadingOverlay from '../../components/LoadingOverlay';
import TopBar from '../../components/TopBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const commentList = [
    {
        image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        name: 'Klarke_So',
        commentedAt: '2022-03-22 | 16:16:07',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.',
        likeCnt: 5
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU',
        name: 'Klarke_So',
        commentedAt: '2022-03-22 | 16:16:07',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.',
        likeCnt: 3
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW1v_mM9vuI9Sd7amcifLxqjlFN7bXlvv3LLtPHuLm1khSZwqsovb7bbOWb-z5CRwqnU&usqp=CAU',
        name: 'Klarke_So',
        commentedAt: '2022-03-22 | 16:16:07',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.',
        likeCnt: 8
    }
]

const userInfo = {
    name: 'Klarke_So',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    createdAt: '2022-03-22 | 16:16:07',
    viewCnt: '35 views',
}

const articleContent = {
    image: require('../../assets/images/temp/1.png'),
    description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
}

const participantAvatars = [
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW1v_mM9vuI9Sd7amcifLxqjlFN7bXlvv3LLtPHuLm1khSZwqsovb7bbOWb-z5CRwqnU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6i4ZYua1zQ_e3a50STgzPznq5Hy91z-2sZV-TtyT77ugRs95SMNUPf98FTwcrgB0lk3Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldNBADAizrpttiIwQyV1qIQ2_faSjzGaqjtL9mcN2ot2GuagwWFvGS0dwVT71pl6HCCY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgC0k4yw6tF2Co7xlfdJPijlIM1_fOpj1fNj1Sws_je5maXIUroADm6YA-4UhcMMfwRs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiwBuvNhCcIxSz-_qfJEnHYNeIte-WYsPoWWsoyWcjfysjJNjWRh7QtiP_IRBMBFR4sg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOT4CisUiu-CGyO7GvaQo1dBJA8OEJ2gOpwlDVeRcPXbvkGqqT1OkA40npcvOjbHoYqjM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcLlX32lKjIXk7EU7ey1UjFFS-ZpDkdpBnX2BRUJH8ztxiQfimD4V8dG3OBCSZBfu_d8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBQF_qZluG0OnyvSIoLeJ75riG6jhG6yjKtm-_8aqIdrK0Wb3lVsVR2_3S9I5Q6TYwKE&usqp=CAU',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]

const FormDetailedScreen = (props) => {

    const [loading, setLoading] = useState(false);
    
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    {loading && <LoadingOverlay />}
                    <View style={{ backgroundColor: 'white' }}>
                        <TopBar
                            title=""
                            isArrowBack={true}
                            isBookMark={true}
                            isSharealt={true}
                            onBack={() => {props.navigation.goBack()}}
                        />
                        <View style={{backgroundColor: 'white'}}>
                            <Text style={styles.title}>
                                Auto Immune Disease How To Prevent
                            </Text>
                        </View>
                        <View style={styles.writer}>
                            <View style={{flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Avatar
                                        containerStyle={styles.avatar}
                                        rounded
                                        source={{uri: userInfo.avatar}}
                                        size="medium"
                                    />
                                    <Text style={styles.writerName}>{userInfo.name}</Text>
                                </View>
                                <Text style={styles.writerInformation}>{userInfo.createdAt}</Text>
                                <Text style={styles.writerInformation}>{userInfo.viewCnt}</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={ styles.followButton }>
                                    <Text style={{ color: 'white' }}>Follow</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainArticlePanel}>
                            <Image style={styles.mainImage} source={articleContent.image}/>
                            <View>
                                <Text style={styles.mainDescription}>{articleContent.description}</Text>
                                <TouchableOpacity style={ styles.likeButton }>
                                    <Icon name="like" type="evilicon" color="white" />
                                    <Text style={{ color: 'white' }}>Like</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.participantPanel}>
                            <Text style={styles.subTitle}>Participants</Text>
                            <View style={styles.participantList}>
                            { participantAvatars.map((item, index) => 
                                <Avatar
                                    containerStyle={styles.participantItem}
                                    rounded
                                    source={{uri: item}}
                                    size="medium"
                                    key={index}
                                />
                            ) }
                            </View>
                        </View>
                        <View style={styles.commentPanel}>
                            <Text style={styles.subtitleComment}>All Comments</Text>
                            { commentList.map((item, index) => 
                                <CommentItem
                                    avatar={item.image}
                                    name={item.name}
                                    creationDate={item.commentedAt}
                                    description={item.description}
                                    likeCnt={item.likeCnt}
                                    key={index}
                                />
                            ) }
                        </View>
                        <View style={styles.postPanel}>
                            <TextInput placeholderTextColor="#AAAAAA" style={styles.postBox} placeholder='what do you think?' />
                            <TouchableOpacity style={styles.sendIcon}>
                                <Icon name="send" type="font-awesome" color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const CommentItem = (props) => {
    const {avatar, name, creationDate, description, likeCnt} = props;

    return (
        <View style={styles.commentContainer}>
            <Avatar
                containerStyle={styles.avatar}
                rounded
                source={{uri: avatar}} ///  {uri: avatar}
                size="medium"
            />
            <View style={{ width: Dimensions.get('screen').width * 0.65 }}>
                <Text style={styles.commentWriterName}>{name}</Text>
                <Text style={styles.commentCreationDate}>{creationDate}</Text>
                <Text style={styles.commentContent}>{description}</Text>
            </View>
            <Text>{likeCnt}</Text>
            <TouchableOpacity>
                <Icon name='like' type='evilicon' />
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="dots-vertical" 
                        size={18} 
                        color="#9D9D9D"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainArticlePanel: {
        backgroundColor: 'white'
    },
    commentPanel: {
        backgroundColor: '#EEEEEE',
        paddingTop: 20
    },
    subtitleComment: {
        marginLeft: Dimensions.get('screen').width * 0.05,
        fontWeight: 'bold',
        fontSize: 22
    },
    commentContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1
    },
    commentWriterName: {
        marginLeft: 10,
        marginTop: 5,
        fontWeight: 'bold'
    },
    commentCreationDate: {
        marginLeft: 10,
        color: '#BBBBBB'
    },
    commentContent: {
        marginLeft: 10,
        marginTop: 10
    },
    participantPanel: {
        backgroundColor: 'white',
        marginTop: 5,
        paddingBottom: 20,
        borderTopColor: '#EEEEEE',
        borderTopWidth: 5
    },
    participantList: {
        width: Dimensions.get('screen').width * 0.9,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    participantItem: {
        marginHorizontal: 3,
        marginVertical: 3
    },
    likeButton: {
        width: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'rgb(24, 119, 242)',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 15,

    },
    mainDescription: {
        marginLeft: Dimensions.get('screen').width * 0.025,
        marginRight: Dimensions.get('screen').width * 0.025,
        marginBottom: 20,
        color: '#AAAAAA'
    },
    mainImage: {
        width: Dimensions.get('screen').width * 0.95,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    followButton: {
        marginRight: Dimensions.get('screen').width * 0.1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'rgb(104, 122, 97)'
    },
    writerInformation: {
        color: '#BBBBBB',
        marginLeft: Dimensions.get('screen').width * 0.05,
        fontWeight: 'bold'
    },
    writerName: {
        marginTop: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    toolkitImage: {
      width: 460,
      height: 200,
      margin: 10
    },
    scrollContent: {
      alignItems: 'center',
      paddingBottom: 420,
    },
    title: {
        fontSize: 22,
        marginLeft: Dimensions.get('screen').width * 0.05,
        marginTop: 30,
        color: '#A5593C',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        color: '#A5593C',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 10
    },
    itemTitle: {
        color: '#A5593C',
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        marginHorizontal: 15
    },

    itemContext: {
        marginVertical: 8,
        color: 'gray',
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        marginHorizontal: 15
    },

    writer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 10
    },
    avatar: {
        marginLeft: Dimensions.get('screen').width * 0.05,
    },
    postPanel: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: Dimensions.get('screen').width * 0.025,
        backgroundColor: 'rgb(67, 67, 67)'
    },
    postBox: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        minWidth: Dimensions.get('screen').width * 0.85,
        height: 50,
        backgroundColor: 'rgb(91, 91, 91)',
        color: "white",
        paddingLeft: 20
    },
    sendIcon: {
        marginLeft: 5,
        marginTop: 10
    }
});

export default FormDetailedScreen;
