import React, { Component } from 'react';
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

class FoodRow extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={styles.text}>${this.props.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text:{
    color: '#95989A'
  }
} )

export default FoodRow