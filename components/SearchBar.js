import React, { Component } from 'react';
import searchIcon from './../assets/musica-searcher.png'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

class SearchView extends Component{
  render() {
    return(
      <View style={styles.searchFormGroup}>
        <Image 
          style={styles.searchIcon} 
          source={searchIcon}
        />
      
        <TextInput 
          style={styles.searchField} 
          placeholder={this.props.placeholder} 
          underlineColorAndroid='transparent' 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  searchFormGroup:{
    display: 'flex',
    flexDirection: 'row'
  },
  searchIcon: {
    width: 21,
    height: 21,
    marginRight: 3
  },
  searchField:{
    width: '80%',
    marginLeft: 3,
    marginTop: -4
  }
} )

export default SearchView