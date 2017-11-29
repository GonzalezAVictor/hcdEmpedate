import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

const foodTest = [
  {name: 'Pastor', price:'120'},
  {name: 'Pastor', price:'120'},
  {name: 'Pastor', price:'120'},
  {name: 'Pastor', price:'120'},
  {name: 'Pastor', price:'120'},
  {name: 'Pastor', price:'120'}
]

class AddEvent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create event',
    headerStyle: {
      backgroundColor:'#4D91D9',
    },
    headerTitleStyle: {
      color: '#032B56',
      marginLeft: 0,
    }
  });

  render() {
    return(
      <View>
        <View style={styles.container}>
          <ScrollView style={styles.formSection}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Event Name:</Text>
              <TextInput
                style={styles.field}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Event Date:</Text>
              <TextInput
                style={styles.field}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}t>Address:</Text>
              <TextInput
                style={styles.field}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Food & Snacks</Text>
              {
                foodTest.map( (food, index)=> {
                  return(
                    <Text key={index} style={styles.foodItem}> {food.name} - ${food.price} </Text>
                  )
                } )
              }

              <TouchableOpacity style={styles.addFoodButton}>
                <View>
                  <Text style={styles.addFoodbuttonText}>Add Food</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
              <TouchableOpacity style={styles.saveButton}>
                <View>
                  <Text style={styles.saveButtonText}>Save</Text>
                </View>
              </TouchableOpacity>
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
    height: '100%'
  },
  mainTitle: {
    fontSize: 20,
    color: '#95989A',
    marginTop: 40,
    paddingLeft: 20
  },
  label: {
    fontSize: 18,
    marginBottom:10,
    color: '#B27303'
  },
  field: {
    width: 330,
    height: 37,
    fontSize: 18,
    paddingLeft: 15,
    fontSize: 14,
    color: '#B27303',
    backgroundColor: 'rgba(255, 166, 8, .31)'
  },
  formGroup: {
    marginLeft: 20,
    marginBottom: 20
  },
  formSection: {
    paddingTop: 20,
    paddingBottom: 50
  },
  foodItem:{
    fontSize: 15,
    color: '#95989A',
    marginBottom: 5
  },
  addFoodButton: {
    width: 118,
    height: 26,
    marginTop: 10,
    backgroundColor: 'rgba( 0, 84, 178, .63 )',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addFoodbuttonText: {
    color: '#FFFFFF',
    fontSize: 15
  },
  saveButton: {
    width: 157,
    height: 41,
    backgroundColor: '#0054B2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20
  }
} )

export default AddEvent