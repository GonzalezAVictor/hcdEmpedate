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
import EventService from './../api/EventService';

const events = [
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Peda loca', date: '29-Dic-2017'},
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

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    EventService.getEventsInvted().then(response => {
      // console.log(response);
      this.setState({ events: response });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    let { events } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <FlatList
            data={events}
            renderItem={({ item, index }) => (<TouchableOpacity onPress={() => navigate('EventDetails', { event: item })}>
              <EventItemList
                key = {index}
                eventName = {item.name}
                eventDate = {item.start_time}
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