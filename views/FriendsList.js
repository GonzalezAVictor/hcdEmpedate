import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

import FriendListItem from './../components/FriendListItem';
import SearchBar from './../components/SearchBar';

const friends = [
  {name: 'Sara Algo'},
  {name: 'Ricardo Sosa'},
  {name: 'Raul Canul'},
  {name: 'Majeishon :)'},
  {name: 'David Hernandez'},
  {name: 'Victor Gonzalez'}
]

class FriendsList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Friend List',
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
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <SearchBar
            placeholder="Search Friends..."
          />
          <FlatList
            data={friends}
            renderItem={(item, index) => (
              <FriendListItem name={item.item.name} key={index} />
            )}
          />



        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    minHeight: '100%',
    paddingTop: 16,
    paddingLeft: 26,
    paddingRight: 26,
  },
  friendsList:{
    marginTop: 20,
    marginBottom: 20
  }
} )

export default FriendsList;