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
import UserService from './../api/UserService';
import ItemService from './../api/ItemService';

const foods = [
  {name: 'Pastor', price: 250},
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
      name: '',
      start_time: '2017-12-04 11:23:32',
      address: '',
      created_by: 1, // TODO: usar el id del usuario logueado
      users: [],
      friends: [],
      userToAdd: '',
      food: [],
      quantity: '',
      foodName: '',
      foodPrice: '',
      itemsToAttach: [],
      eventId: '',
    };
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.attachNeeds = this.attachNeeds.bind(this);
  }

  componentDidMount() {
    UserService.getAllUsers().then(response => {
      console.log('-> users: ', response);
      this.setState({ users: response });
    });
  }

  handleCreateEvent() {
    EventService.createOne(this.state).then(response => {
      // console.log('-> response: ', response);
      this.setState({ eventId: response.id });
      return response;
    }).then((response) => {
      console.log('->>>> ', response);
      let data = {
        guests: this.state.friends,
      };
      EventService.addUserToEvent(response.id, data).then(response2 => {
        console.log('-> response2');
      });
      return response;
    }).then(response => {
      this.attachNeeds();
    });
  }

  attachNeeds() {
    let { food } = this.state;
    let foodLength = food.length;
    food.forEach((fod, i) => {
      let item = {
        name: fod.name,
        approximate_price: fod.price,
        annotations: "lalala"
      };
      ItemService.createItem(item).then(response => {
        console.log('-> response2');
        return response;
      }).then(response => {
        console.log('Hi :D : ', response);
        let newArrayItemsToAttach = this.state.itemsToAttach;
        newArrayItemsToAttach.push({ id: response.id, quantity: 1 });
        this.setState({ itemsToAttach: newArrayItemsToAttach });
        console.log(3);
        return;
      }).then(() => {
        if(i === foodLength - 1) {
          let itemsToAdd = {
            items: this.state.itemsToAttach,
          };
          console.log('-> se va aneviar ésto: ', itemsToAdd);
          setTimeout(ItemService.attachItemsToEvent(this.state.eventId, itemsToAdd).then(response3 => {
            console.log('-> response3 final: ', response3);
          }), 1000);
        }
      });
    });
  }

  handleAddFood() {
    let newFood = {
      name: this.state.foodName,
      price: this.state.foodPrice,
    };
    let newArrayFood = this.state.food;
    newArrayFood.push(newFood);
    this.setState({
      food: newArrayFood,
      foodName: '',
      foodPrice: ''
    });
    console.log('-> foods: ', this.state.food);
  }

  handleAddFriend() {
    let { users, userToAdd } = this.state;
    let userToAdd2 = users.find(user => {
      console.log(user);
      return user.name.toString().toLowerCase() === userToAdd.toString().toLowerCase();
    });
    console.log(userToAdd2);
    if (userToAdd2) {
      let newArrayFriends = this.state.friends;
      newArrayFriends.push(userToAdd2.id);
      this.setState({ friends: newArrayFriends });
    } else {
      console.log('-> hacer algo al respecto');
    }
    this.setState({ userToAdd: '' });
    console.log('-> this.state.friends: ', this.state.friends);
  }

  calculateTotal() {
    let { food } = this.state;
    let total = 0;
    food.forEach(fod => {
      total = parseFloat(total) + parseFloat(fod.price);
    });
    return <Text>Total:  ${ total }</Text>;
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

            <Text style={styles.title}>Friends</Text>

            <View style={styles.friendsSection}>
              <TextInput
                style={styles.friendInput}
                placeholder="Friend"
                value={this.state.userToAdd}
                underlineColorAndroid='#BCBCBC'
                onChangeText={(userToAdd) => this.setState({ userToAdd })}
              />
              <TouchableOpacity style={styles.addFriend} onPress={this.handleAddFriend}>
                <Image
                  source={addFoodIcon}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.foodSection}>
              <Text style={styles.title}>Food</Text>

              <View style={styles.foodList}>
                {this.state.food.map( ( food, index )=>{
                  return(
                    <FoodRow
                      key={index}
                      name={food.name}
                      price={food.price}
                    />
                  )
                } )}
              </View>

              <View style={styles.foodTotal}>
                <Text>{this.calculateTotal()}</Text>
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
                      value={this.state.foodName}
                      onChangeText={(foodName) => this.setState({ foodName })}
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
                      value={this.state.foodPrice}
                      underlineColorAndroid='#BCBCBC'
                      onChangeText={(foodPrice) => this.setState({ foodPrice })}
                    />
                  </View>
                </View>

                <TouchableOpacity style={styles.formGroup} onPress={this.handleAddFood}>
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
    // marginTop: 30
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
    marginTop: 10
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
  friendsSection: {
    flex: 1,
    marginBottom:15,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  friendInput: {
    flex: 7
  },
  addFriend: {
    flex: 2
  },
  foodTotal: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    marginRight: 15
  }
})

export default AddEventView