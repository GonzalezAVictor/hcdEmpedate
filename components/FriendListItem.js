import React, { Component } from 'react';
import addButton from './../assets/add.png'
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

class FriendRowView extends Component {
  render() {
    let { name } = this.props;
    const abreviation =  name ? name.slice(0,1).toUpperCase() : '';
    return(
      <View style={styels.mainContainer}>
        <View style={styels.container}>
          <Text style={styels.eventAbr}>{abreviation}</Text>
          <Text style={styels.text}> {name} </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={addButton}
            style={styels.addButton}
          />
        </TouchableOpacity>
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
  },
  addButton: {
    width: 17.37,
    height: 17.37,
  }
} )

export default FriendRowView