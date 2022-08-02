import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import LoadingOverlay from '../components/LoadingOverlay';
import Recipe from '../components/Recipe';
import TopBar from '../components/TopBar';
import Images from '../assets/Images';
import VideoCard from '../components/VideoCard';

const recipes = [
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL'
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 MINS MEAL'
  },
  {
    image: require('../assets/images/forum3.png'),
    title: 'Cottage cheese pie tart with fresh cheese',
    category: '30 MINS MEAL'
  },
  {
    image: require('../assets/images/forum4.png'),
    title: 'Salted raw fish fillet with egg and piece',
    category: '30 MINS MEAL'
  },
];

const videos = [
  {
    thumbnail: require('../assets/images/video1.png'),
    title: 'Hope, Strength and Faith Meditation',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    thumbnail: require('../assets/images/video2.png'),
    title: 'Hope, Strength and Faith Meditation',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
]

const Activity = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>
          Today's Activity
        </Text>
        <TouchableOpacity>
          <Text style={styles.screenLink}>
            see progress
          </Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={Images.homeActivity}
        style={styles.activityImage}
      />
      <Text style={styles.activityTitle}>
        Positive Reminders of Strength
      </Text>
      <View style={styles.activityTimeContainer}>
        <View style={styles.activityTimePeriod}>
          <Text style={styles.activityTimePeriodText}>WEEK 1</Text>
        </View>
        <Text style={styles.activityTimeMin}>30 mins</Text>
      </View>
      <Text style={styles.activityContent}>
        Another way to help improve mood and outlook is through positive thing. Members will receive daily affirmations and positive thought to help them focus on their strength and capabilites.
      </Text>
    </View>
  )
}

const Recipes = (props) => {
  const {recipes, navigation} = props;

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>
          Your weekly recipe
        </Text>
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('WeeklyRecipes')
          }}>
          <Text style={styles.screenLink}>
            see all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recipes}>
        {recipes.map((recipe, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.recipe}
            onPress={() => {navigation.navigate('RecipeDetail')}}
          >
            <Recipe recipe={recipe} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const Meditation = (props) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>
          Weekly Meditation
        </Text>
      </View>
      <Text style={styles.description}>
        Another way to help improve mood and outlook is through positive thing. Members will receive daily affirmations
      </Text>
      <View style={styles.videos }>
        <View style={{ width: '48%' }}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('FullScreenVideo')}}
          >
            <VideoCard videoData={videos[0]} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('FullScreenVideo')}}
          >
            <VideoCard videoData={videos[1]} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.activityTimeContainer}>
        <View style={styles.activityTimePeriod}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('Meditation')}}
          >
            <Text style={styles.activityTimePeriodText}>see all videos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Movement = (props) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>
          Weekly Movement
        </Text>
      </View>
      <Text style={styles.description}>
        Another way to help improve mood and outlook is through positive thing. Members will receive daily affirmations
      </Text>
      <View style={styles.videos }>
        <View style={{ width: '48%' }}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('FullScreenVideo')}}
          >
            <VideoCard videoData={videos[0]} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%' }}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate('FullScreenVideo')}}
          >
            <VideoCard videoData={videos[1]} />
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.activityTimeContainer}>
          <View style={styles.activityTimePeriod}>
            <TouchableOpacity
              onPress={() => {props.navigation.navigate('Movement')}}
            >
              <Text style={styles.activityTimePeriodText}>see all videos</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  )
}

const HomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TopBar
              title="Welcome" 
              isAvatar={true}
              isBell={true}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            {loading && <LoadingOverlay />}
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
              <Activity />
              <View style={styles.band}></View>
              <Recipes recipes={recipes} navigation={props.navigation}/>
              <View style={styles.band}></View>
              <Meditation navigation={props.navigation}/>
              <View style={styles.band}></View>
              <Movement navigation={props.navigation}/>
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
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 25
    },
    screenLink: {
      color: '#9CA3B7',
      fontFamily: 'OpenSans-Light'
    },
    band: {
      height: 8, 
      backgroundColor: '#F6F6F6'
    },
    //activity
    activityImage: {
      width: '100%', 
      height: 200, 
      borderRadius: 5, 
      marginTop: 10, 
      marginBottom: 10
    },
    activityTitle: {
      fontSize: 24, 
      color: '#A5593C', 
      marginBottom: 5,
      fontFamily: 'OpenSans-Bold'
    },
    activityTimeContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 5
    },
    activityTimePeriod: {
      backgroundColor: '#88B875', 
      borderRadius: 5, 
      paddingTop: 5, 
      paddingLeft: 8, 
      paddingRight: 8, 
      paddingBottom: 5, 
      alignSelf: 'flex-start'
    },
    activityTimePeriodText: {
      color: 'white', 
      fontSize: 15,
      fontFamily: 'OpenSans-Bold'
    },
    activityTimeMin: {
      marginLeft: 5, 
      color: '#A1A1A1', 
      fontSize: 15,
      fontFamily: 'OpenSans-Light'
    },
    activityContent: {
      marginLeft: 5, 
      color: '#989898', 
      fontSize: 15,
      fontFamily: 'OpenSans-Light'
    },
    //forums
    recipes: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 10
    },
    recipe: {
      width: '48%',
      marginTop: 5,
      marginBottom: 5
    },
    //Meditation
    description: {
      color: '#989898',
      fontSize: 15,
      marginTop: 10,
      fontFamily: 'OpenSans-Light'
    },
    videos: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 15,
    },

});

export default HomeScreen;
