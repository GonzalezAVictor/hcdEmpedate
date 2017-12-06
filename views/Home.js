import React, { Component } from 'react';
import EventItemList from './../components/EventItemList';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

const events = [
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
  {name: 'Posada Yellow', date: '23-Enr-2017'},
  {name: 'Posada Fac', date: '5-Feb-2017'},
]

class Home extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: {
      backgroundColor:'#4D91D9',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <FlatList
            data={events}
            renderItem={({ item, index }) => (<TouchableOpacity onPress={() => navigate('EventDetails', { event: item })}>
              <EventItemList
                key = {index}
                eventName = {item.name}
                eventDate = {item.date}
              />
            </TouchableOpacity>)}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('AddEvent', {})}>
            <Text>Add event</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('FriendsList', {})}>
            <Text>See friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#F0F0F0',
    height: '100%',
    flex: 1
  },
  eventsContainer: {
    flex: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  footerContainer: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#032B56',
    justifyContent: 'center',
    alignItems: 'center',
  }
} )

export default Home