import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const Forum = (props) => {
    const forum = props.forum;
    
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={forum.image}
                resizeMode='stretch'
            />
            <Text style={styles.title}>{forum.title}</Text>
            <Text style={styles.category}>{forum.category}</Text>
        </View>
    )
}

const styles = {
    container: {
        fontFamily: 'OpenSans-Light'
    },
    image: {
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').width * 0.38 * 0.75,
        borderRadius: 10
    },
    title: {
        marginTop: 5,
        color: '#A5593C',
        fontSize: 17,
        fontFamily: 'OpenSans-Light'
    },
    category: {
        color: '#9CA3B7',
        fontSize: 12,
        fontFamily: 'OpenSans-Light'
    }
}

export default Forum;