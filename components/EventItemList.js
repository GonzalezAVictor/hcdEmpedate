import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class EventItemList extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.eventNameText}> { this.props.eventName } </Text>
        <Text style={styles.eventDateText}> { this.props.eventDate } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    width: '100%',
    height: 59,
    backgroundColor: 'rgba( 255, 166, 8, .21 )',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  eventNameText: {
    color: '#B27303',
    fontSize: 15,
    fontWeight: 'bold'
  },
  eventDateText: {
    color: '#B27303',
    fontSize: 13
  }
} )

export default EventItemList