import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class PersonViwer extends React.Component {
  static navigationOptions = {
    title: 'Person Viwer',
    headerStyle: {
      backgroundColor:'#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hola, desde la nueva ventana :)</Text>
        <Text>{this.props.navigation.state.params.name}</Text>
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