import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './Components/Accueil'
import Navigation from './Navigation/Navigation'



// TUTO

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

/* BASE

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
