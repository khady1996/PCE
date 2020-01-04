
import Accueil from '../Components/Accueil'
import MonumentDetail from '../Components/MonumentDetail'


import React from 'react';
import { Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator} from 'react-navigation-tabs';

import {createAppContainer } from 'react-navigation';

class ParcoursScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
          source={require("../Images/logo.png")}
          style={{ resizeMode: 'contain', flex: 1 }}
        />
      </View>
    );
  }
}

class LocalisationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
          source={require("../Images/logo.png")}
          style={{ resizeMode: 'contain', flex: 1 }}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Parcours') {
    iconName = `ios-train`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
	  
   iconName = `ios-options`;
  
  }
  else if (routeName === 'Accueil') {
	  
   iconName = `ios-home`;
  }
  else if (routeName === 'Localisation') {
	  
   iconName = `ios-navigate`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={30} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
		Accueil: { 
    screen: Accueil,
    navigationOptions: {
      title: 'Monuments'
    }
  },
      Parcours: { screen: ParcoursScreen },
      Settings: { screen: SettingsScreen },
	  Localisation: { screen: LocalisationScreen },
	  
	  
    },
	
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);

