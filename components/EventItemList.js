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

class EventRowView extends Component {
  render() {
    const abreviation = this.props.eventName.slice(0,1).toUpperCase()
    return(
      <View style={styels.mainContainer}>
        <View style={styels.container}>
          <Text style={styels.eventAbr}>{abreviation}</Text>
          <Text style={styels.text}> {this.props.eventName} </Text>
        </View>

        <Text style={styels.text}>
          {this.props.eventDate.slice(0,10)}
        </Text>
      </View>
    )
  }
}

const styels = StyleSheet.create( {
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#BCBCBC',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eventAbr:{
    width: 40,
    height: 40,
    backgroundColor: '#81D2C7',
    color: '#FFFFFF',
    borderRadius: 50,
    fontSize: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text: {
    color: '#95989A'
  }
} )

export default EventRowView