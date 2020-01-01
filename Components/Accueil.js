import React from 'react';
import {StyleSheet, View, TextInput, Button , FlatList } from 'react-native';


import films from 'C:/DEV/AppliMonument/Helpers/MonumentsData'
import FilmItem from './MonumentItem'

class Accueil extends React.Component {
	
	render() {
        return (
			<View>
		  <TextInput style={styles.textinput} placeholder = 'Monuments'/>
			<Button style={styles.textinput} title='Rechercher'  onPress={() => {}}/>
			<FlatList
  data={films}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <Text>{item.title}</Text>}
/>
			
		  </View>
    )
    }
  
}

export default Accueil;

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
});