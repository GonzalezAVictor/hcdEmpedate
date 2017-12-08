import React, { Component } from 'react';
import FoodRow from './../components/FoodRow'
import eventNameIcon from './../assets/confetti.png'
import eventDateIcon from './../assets/calendar-3.png'
import foodNameIcon from './../assets/cutlery.png'
import addFoodIcon from './../assets/add.png'
import addEventIcon from './../assets/add-event.png'
import foodPriceIcon from './../assets/dollar-symbol.png'
import eventAddressIcon from './../assets/facebook-placeholder-for-locate-places-on-maps.png'
import searchIcon from './../assets/musica-searcher.png';
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
import EventService from './../api/EventService';

const foods = [
  {name: 'Pastor', price: 250},
  {name: 'Pastor', price: 250}
];

const friends = [
  {name: 'Sara Algo'},
  {name: 'Ricardo Sosa'},
  {name: 'Raul Canul'},
  {name: 'Majeishon :)'},
  {name: 'David Hernandez'},
  {name: 'Victor Gonzalez'}
];

class AddEventView extends Component{
  static navigationOptions = ({ navigation }) => ({ 
    title: `${navigation.state.params.event.name}`, 
    headerTintColor: '#FFFFFF',
    headerStyle: { 
      backgroundColor:'#4D91D9',
    }, 
    headerTitleStyle: { 
      color: '#FFFFFF', 
      marginLeft: 0, 
    } 
  });

  constructor(props) {
    super(props);
    this.state = {
      event: {},
      total: 0,
    };
  }

  componentDidMount() {
    let { event } = this.props.navigation.state.params; 
    console.log('-> event: ', event);
    EventService.getById(event.id).then(response => {
      console.log('-> response: ', response);
      this.setState({ event: response });
    }).then(() => {
      this.calculateTotal();
    });
  }

  calculateTotal() {
    let { event } = this.state;
    let { needs } = event;
    let total = 0;
    needs.forEach(fod => {
      total = parseFloat(fod.approximate_price) + parseFloat(total);
    });
    this.setState({ total });
  }

  render() {
    const { navigate } = this.props.navigation;
    let { event } = this.state;
    return(
      <View style={styles.mainContaier}>
        <ScrollView>
          <View style={styles.dateRow}>
            <Image
              source={eventDateIcon}
              style={styles.calendarIcon}
            />
            <Text style={styles.dateLabel}>{ event.start_time ? event.start_time.slice(0, 10) : ''}</Text>
          </View>

          <View style={styles.foodContainer}>
            <Text style={styles.title}>Food ({0})</Text>
            {
              this.state.event.needs ? this.state.event.needs.map( ( food, index )=>{
                return(
                  <FoodRow
                    key={index}
                    name={food.name}
                    price={food.approximate_price}
                  />
                )
              } ) : null
            }
          </View>

          <View style={styles.total}>
            <Text>Total:  ${this.state.total}</Text>
          </View>

          <View style={styles.inlineForm}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View style={styles.formGroup}>
                <Image
                  source={foodNameIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.foodInput}
                  placeholder="Food..."
                  underlineColorAndroid='#BCBCBC' 
                />
              </View>

              <View style={styles.formGroup}>
                <Image
                  source={foodPriceIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.foodInput}
                  placeholder="Price..."
                  underlineColorAndroid='#BCBCBC' 
                />
              </View>
            </View>

            <TouchableOpacity style={styles.formGroup}>
              <Image
                source={addFoodIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          
          <View>
            <Text style={styles.title}>Friends ({event.guests ? event.guests.length : 0})</Text>
            {
              event.guests ? event.guests.map((friend, i) => {
                return <Text key={i}>{friend.name}</Text>
              }) : null
            }
          </View>

          



        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContaier: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    padding: 10,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#95989A'
  },dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 45,
    height: 45,
  },
  dateLabel: {
    fontSize: 25,
    marginLeft: 10,
  },
  foodContainer: {
    marginTop: 30,
  },
  inlineForm:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  formGroup:{
    flexDirection: 'row',
    marginBottom:30
  },
  icon:{
    width: 25,
    height: 25,
    marginRight: 12
  },
  foodInput:{
    width: 65,
    paddingBottom: 10
  },
  moneyContainer: {
    marginTop:20,
  },
  addButton:{
    width: 147,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#81D2C7',
    marginTop: 10
  },
  buttonText: {
    color:'#FFFFFF',
    marginLeft: 1
  },
  total: {
    alignItems: 'flex-end'
  }
});

// <View style={styles.moneyContainer}>
//             <Text style={styles.title}>Money By Friend: ${parseFloat(53)}</Text>
//             <TouchableOpacity style={styles.addButton}>
//               <Image
//                 source={addEventIcon}
//                 style={styles.icon}
//               />
//               <Text style={styles.buttonText}>Add Event</Text>
//             </TouchableOpacity>
//           </View>

export default AddEventView