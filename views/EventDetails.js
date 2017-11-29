import React, { Component } from 'react';
import EventItemList from './../components/EventItemList';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

const foods = [
  {name: 'Random Food', amount: 12, price: 30},
  {name: 'Random Food', amount: 12, price: 30},
  {name: 'Random Food', amount: 12, price: 30},
  {name: 'Random Food', amount: 12, price: 30},
  {name: 'Random Food', amount: 12, price: 30}
]

const friends = [
  {name: 'Random Friend', phone: '999-999-99'},
  {name: 'Random Friend', phone: '999-999-99'},
  {name: 'Random Friend', phone: '999-999-99'},
  {name: 'Random Friend', phone: '999-999-99'},
  {name: 'Random Friend', phone: '999-999-99'},
  {name: 'Random Friend', phone: '999-999-99'}
]

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.event.name}`,
    headerStyle: {
      backgroundColor:'#4D91D9',
    },
    headerTitleStyle: {
      color: '#032B56',
      marginLeft: 0,
    }
  });

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    let { event } = this.props.navigation.state.params;
    return(
      <View>

        <View style={styles.container}>     
          <ScrollView>
            <Text style={styles.eventDateLabel}>{event.date}</Text>
            <View style={styles.section}>
              <View style={styles.sectionTitle}>
                <Text style={styles.title}>Food & Snacks(23)</Text>
                <Text style={styles.title}>$23.54</Text>
              </View>

              {
                foods.map( ( food, index )=> {
                  return(
                    <Text style={styles.foodDetail} key={index}>{food.name} ({food.amount}) - ${food.price} </Text>
                  )
                } )
              }

              <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.addButton}>
                  <View>
                    <Text style={styles.buttonText}> Add </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.divideButton}>
                  <View>
                    <Text style={styles.buttonText}> Divide Expenses </Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.section}>
              <View style={styles.sectionTitle}>
                <Text style={styles.friendsTitle}>Friends Invited ({friends.length})</Text>
              </View>

              {
                friends.map( ( friend, index )=> {
                  return(
                    <Text style={styles.foodDetail} key={index}> {friend.name} - {friend.phone} </Text>
                  )
                } )
              }

              <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.addButton}>
                  <View>
                    <Text style={styles.buttonText}>Add Friend</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#F0F0F0',
    marginBottom: 30,
    height: '100%',
    justifyContent: 'center'
  },
  eventNameLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B27303',
    marginTop: 30,
    marginLeft: 20
  },
  eventDateLabel: {
    color: '#B27303',
    marginLeft: 20,
    fontSize: 15
  },
  section: {
    width: 331,
    backgroundColor: 'rgba( 0, 84, 178, .47 )',
    marginLeft: 20,
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    width: 331,
    height: 46,
    backgroundColor: '#0054B2',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18
  },
  foodDetail: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10
  },
  addButton: {
    width: 119,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'rgba( 0, 84, 178, .87 )'
  },
  divideButton: {
    width: 119,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0054B2'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15
  },
  buttonsSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10
  },
  friendsTitle: {
    color: '#FFFFFF',
    fontSize: 18
  }
} )

export default EventDetails