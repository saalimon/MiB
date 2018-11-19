import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export default class App extends React.Component {
  state = {
    header: 'Personal Information'
  }
  render() {
    return (
      <View>
        <PresentationalComponent header = {this.state.header} />
      </View>
    );
  }
}


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Niti</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//import library
import React from 'react';
import {Text, AppRegistry} from 'react-native';
//create Component
const App = () =>(
    <Text>Hello</Text>
);

//render it
AppRegistry.registerComponent('MyReactNative',() => App);
