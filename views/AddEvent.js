import React, { Component } from 'react';
import FoodRow from './../components/FoodRow'
import eventNameIcon from './../assets/confetti.png'
import eventDateIcon from './../assets/calendar-3.png'
import foodNameIcon from './../assets/cutlery.png'
import addFoodIcon from './../assets/add.png'
import addEventIcon from './../assets/add-event.png'
import foodPriceIcon from './../assets/dollar-symbol.png'
import eventAddressIcon from './../assets/facebook-placeholder-for-locate-places-on-maps.png'
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
import EventService from './../api/EventService';

const foods = [
  {name: 'Pastor', price: 250},
  {name: 'Pastor', price: 250}
]

class AddEventView extends Component{
  static navigationOptions = ({ navigation }) => ({ 
    title: 'Add event', 
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
      name: 'SuperFiesta',
      start_time: '2017-12-04 11:23:32',
      address: 'c152 x44 y 46 col Magnolias',
      created_by: 1 // TODO: usar el id del usuario logueado
    };
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
  }

  handleCreateEvent() {
    console.log(this.state);
    EventService.createOne(this.state).then(response => {
      console.log('-> response: ', response);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1}}>
        
        <View style={styles.mainContaier}>
          <ScrollView>

            <View style={styles.formSection}>
              <View style={styles.formGroup}>
                <Image
                  source={eventNameIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Name..."
                  underlineColorAndroid='#BCBCBC'
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>

              <View style={styles.formGroup}>
                <Image
                  source={eventDateIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Date..."
                  underlineColorAndroid='#BCBCBC' 
                  onChangeText={(start_time) => this.setState({ start_time })}
                />
              </View>

              <View style={styles.formGroup}>
                <Image
                  source={eventAddressIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Address..."
                  underlineColorAndroid='#BCBCBC'
                  onChangeText={(address) => this.setState({ address })}
                />
              </View>
            </View>

            <View style={styles.foodSection}>
              <Text style={styles.title}>Food</Text>

              <View style={styles.foodList}>
                {foods.map( ( food, index )=>{
                  return(
                    <FoodRow
                      key={index}
                      name={food.name}
                      price={food.price}
                    />
                  )
                } )}
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
            </View>
            
            <TouchableOpacity style={styles.addButton} onPress={this.handleCreateEvent}>
              <Image
                source={addEventIcon}
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContaier: {
    backgroundColor: '#FAFAFA',
    minHeight: '100%',
    flex: 1,
    paddingTop: 16,
    paddingLeft: 26,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#95989A'
  },
  formSection:{
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
  input:{
    width: '80%',
    paddingBottom: 10
  },
  foodInput:{
    width: 50,
    paddingBottom: 10
  },
  foodSection:{
    marginTop: 30
  },
  foodList:{
    marginTop: 10,
    marginBottom: 15,
    paddingRight: 16
  },
  inlineForm:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
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
  }
})

export default AddEventView