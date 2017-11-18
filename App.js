import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor:'#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Bob' },
        { name: 'Arnold' }
      ]
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Vamos a crear una super App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const screens = StackNavigator({
  Home: { screen: App }
});

// TODO: Change the registry name:
// Change RN_base to the name of the app, need to be equal to the name of the project
AppRegistry.registerComponent('RN_base', () => screens);