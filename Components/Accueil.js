import React from 'react';
import {StyleSheet, View, TextInput, Button , FlatList } from 'react-native';


//import monuments from '../Helpers/monumentsData'
import MonumentItem from './MonumentItem'

class Accueil extends React.Component {
	
	render() {
		
		
		
        return (
			<View>
		  <TextInput style={styles.textinput} placeholder = 'Monuments'/>
			<Button style={styles.textinput} title='Naviguer'  onPress={() => {}}/>
		
		  </View>
    )
    }
  
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Accueil;

