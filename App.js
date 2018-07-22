import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MessageBox from './components/MessageBox.js'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { __DUMMY_LIST__ } from './helpers/filler.js'
import { __STYLES__ } from './helpers/Styles.js'
import {  
  BottomTabBar, 
  createBottomTabNavigator } from 'react-navigation';
import ProfileScreen from './screens/ProfileScreen.js'
 
class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={__DUMMY_LIST__}
          renderItem={({item}) => <MessageBox key={item.key}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tabBar: {
  },
});


const routeConfigs = {
  Feed: {
    screen: Feed,
    title: "Feed",
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name='newspaper-o'
          size={30}
          color={tintColor}
          />
      ),
      tabBarLabel: " "
    }
  },
  Profile: {
    title: 'Profile',
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name='person-outline'
          size={30}
          color={tintColor}
          />
      ),
      tabBarLabel: " "
    }

  }
}

const bottomTabNavConfig = {
  tabBarOptions: {
    style: [
      __STYLES__.shadowUp,
      styles.tabBar
    ],
    showLabel: false,
    activeTintColor: 'black',
    tabStyle: {
      margin: 10,
    },
    labelStyle: {
      flexDirection: 'column',
    }
  },
  initialRouteName: 'Feed'
}

// export default createBottomTabNavigator(routeConfigs, bottomTabNavConfig);

let Container = createBottomTabNavigator(routeConfigs, bottomTabNavConfig);

export default class App extends React.Component{
  render(){
    return (
      <Container/>
    )
  }
};

