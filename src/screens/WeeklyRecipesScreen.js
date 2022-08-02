import React, {useEffect, useState} from 'react';
import {
            View, 
            StyleSheet, 
            SafeAreaView, 
            TouchableOpacity, 
            ScrollView,
            Text
        } from 'react-native';
import {Input} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoadingOverlay from '../components/LoadingOverlay';
import Recipe from '../components/Recipe';
import TopBar from '../components/TopBar';

const sorts = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const recipes = [
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 2
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 MINS MEAL',
    sort: 1
  },
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 0
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 COMMENTS',
    sort: 3
  },
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 2
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 MINS MEAL',
    sort: 1
  },
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 0
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 COMMENTS',
    sort: 3
  },
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 2
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 MINS MEAL',
    sort: 1
  },
  {
    image: require('../assets/images/forum1.png'),
    title: 'Grilled Chicken Cabbage Salad',
    category: '30 MINS MEAL',
    sort: 0
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 COMMENTS',
    sort: 3
  },
  {
    image: require('../assets/images/forum2.png'),
    title: 'Salad from tomatoes, cucumber, red onions',
    category: '30 COMMENTS',
    sort: 3
  },
];

const WeeklyRecipesScreen = (props) => {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        console.log(sorts)
    }, [])
    
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TopBar 
              title="Weekly recipes" 
              isArrowBack={true}
              onBack={() => {props.navigation.goBack()}}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            {loading && <LoadingOverlay />}
            <ScrollView>
                { sorts.map((sort, index) => {
                    <Text 
                        key={index}
                    >
                        {sort}
                    </Text>
                })}
            </ScrollView>
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
              <View style={styles.recipes}>
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
                {recipes.map((recipe, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.recipe} 
                    onPress={() => {props.navigation.navigate('RecipeDetail')}}
                  >
                    <Recipe recipe={recipe} />
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
    //recipes
    recipes: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 15,
    },
    recipe: {
      width: '48%',
      marginTop: 5,
      marginBottom: 5
    },
    inputContainerStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#A1A1A1',
        marginBottom: 10
    }
});

export default WeeklyRecipesScreen;
