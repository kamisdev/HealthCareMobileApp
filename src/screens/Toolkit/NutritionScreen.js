import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, Text, Dimensions} from 'react-native';

import LoadingOverlay from '../../components/LoadingOverlay';
import TopBar from '../../components/TopBar'

const classes = [
    {
        image: require('../../assets/images/temp/1.png'),
        title: 'Inflammatory',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        image: require('../../assets/images/temp/2.png'),
        title: 'Healthy Snacking',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    },
    {
        image: require('../../assets/images/temp/3.png'),
        title: 'Diets',
        description: 'Another way to help improve mood and outlook is through positive thinking. Members will receive daily affirmations and positive thoughts to help them focus on their strength and capabilities.'
    }
]

const NutritionScreen = (props) => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          {loading && <LoadingOverlay />}
          <View>
            <TopBar 
                title="Nutrition Resources" 
                isArrowBack={true}
                isBell={true}
                onBack={() => {props.navigation.goBack()}}
                onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            <Text style={styles.title}>Online Classes About Nutrition</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                { classes.map((item, index) => 
                    <NutritionClasses
                        key={index}
                        image={item.image}
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

const NutritionClasses = (props) => {

    const {image, title, description} = props;

    return (
        <TouchableOpacity onPress={() => {}}>
            <Image
                style={styles.toolkitImage}
                source={image}
                resizeMode='contain'
            />
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemContext}>{description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toolkitImage: {
      width: Dimensions.get('screen').width * 0.95,
      height: 200,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    scrollContent: {
      alignItems: 'center',
      paddingBottom: 420,
    },
    title: {
        fontSize: 22,
        marginLeft: 20,
        marginVertical: 10
    },
    itemTitle: {
        color: '#A5593C',
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        marginHorizontal: 15
    },

    itemContext: {
        marginVertical: 8,
        color: '#989898',
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        marginHorizontal: 15
    },
});

export default NutritionScreen;
