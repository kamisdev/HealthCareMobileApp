import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

import LoadingOverlay from '../../components/LoadingOverlay';
import Images from '../../assets/Images'
import TopBar from '../../components/TopBar'

const MarketplaceHomeScreen = (props) => {

    const [loading, setLoading] = useState(false);
    
    return (
      <View>
        <SafeAreaView>
          {loading && <LoadingOverlay />}
          <View>
            <TopBar 
              title="Welcome" 
              isAvatar={true}
              isBell={true}
              onAvatarClick={() => {props.navigation.navigate('ProfileSetting')}}
            />
            <Text>Marketplace home Screen</Text>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
});

export default MarketplaceHomeScreen;
