import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonViwer from './components/PersonViwer';

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
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <TouchableOpacity onPress={() => navigate('PersonViwer')}><Text>{item.name}</Text></TouchableOpacity>}
        />
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
  Home: { screen: App },
  PersonViwer: { screen: PersonViwer }
});

// TODO: Change the registry name:
// Change RN_base to the name of the app, need to be equal to the name of the project
AppRegistry.registerComponent('RN_base', () => screens);