import React, {Component} from 'react';
import EventItemList from './../components/EventItemList';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Jiro} from 'react-native-textinput-effects'
import icon from '../assets/empedate-icon.png'

class Login extends Component {
  static navigationOptions = {
    title: 'Events',
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      email: ' ',
      view: 'email',
      password: ' ',
      email2: ' '
    };
  }

  _emailVerification() {
    fetch('http://dry-savannah-56767.herokuapp.com/api/users/check?email=' + this.state.email)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          //this.setState({email2: this.state.email})
          this.setState({view: 'password'})
          this.textInput.clear()
        }
        this.forceUpdate()
      })
      .catch(error => {
        console.error(error);
      });
  }

  _authUser() {
    let body = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
    myHeaders = new Headers({
      "Content-Type": "application/json"
    });
    fetch('http://dry-savannah-56767.herokuapp.com/api/users/auth', {
      method: "POST",
      headers: myHeaders,
      body: body
    }).then(response => response.json())
      .then(responseJson => {
       Alert.alert(JSON.stringify(responseJson))
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;

    if (this.state.view === 'email') {
      return (
        <KeyboardAvoidingView style={styles.container}>
          <View style={{flex: 1}}/>
          <View style={{flex: 8}}>
            <View style={{
              flex: 1, justifyContent: 'center',
              paddingBottom: 0,
              alignItems: 'center'
            }}>
              <Image
                style={{width: 150, height: 150}}
                source={icon}
              />
            </View>
            <View style={styles.eventsContainer}>
              <Jiro style={{flex: 7}}
                    label={'Enter your ' + this.state.view}
                    borderColor={'#032b56'}
                    labelStyle={{color: 'black'}}
                    inputStyle={{color: 'white', fontSize: 13}}
                    onChangeText={(email) => this.setState({email})}
                    keyboardType={'email-address'}
              />
              <View style={{flex: 2, paddingTop: 32, paddingBottom: 30}}>
                <TouchableOpacity style={styles.button} onPress={this._emailVerification.bind(this)}>
                  <Text style={styles.textInsideButton}>Go!</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerContainer}>

            </View>
            <View style={{flex: 1}}/>
          </View>
          <View style={{flex: 1}}/>
        </KeyboardAvoidingView>
      )
    }
    if (this.state.view === 'password') {
      return (
        <KeyboardAvoidingView style={styles.container}>
          <View style={{flex: 1}}/>
          <View style={{flex: 8}}>
            <View style={{
              flex: 1, justifyContent: 'center',
              paddingBottom: 0,
              alignItems: 'center'
            }}>
              <Image
                style={{width: 150, height: 150}}
                source={icon}
              />
            </View>
            <View style={styles.eventsContainer}>
              <Jiro style={{flex: 7}}
                    label={'Enter your password'}
                    borderColor={'#032b56'}
                    labelStyle={{color: 'black'}}
                    inputStyle={{color: 'white', fontSize: 13}}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    ref={input => {
                      this.textInput = input
                    }}
              />
              <View style={{flex: 2, paddingTop: 32, paddingBottom: 30}}>
                <TouchableOpacity style={styles.button} onPress={this._authUser.bind(this)}>
                  <Text style={styles.textInsideButton}>Enter</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerContainer}>

            </View>
            <View style={{flex: 1}}/>
          </View>
          <View style={{flex: 1}}/>
        </KeyboardAvoidingView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e2',
    flex: 1
  },
  eventsContainer: {
    //backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,

  },
  footerContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  button: {
    flex: 1,
    //borderRadius: 4,
    //borderWidth: 0.5,
    backgroundColor: '#2c7b37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInsideButton: {
    fontFamily: 'monospace',
    color: 'white',
  }
})

export default Login