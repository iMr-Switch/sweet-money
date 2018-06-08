import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/components/HomeScreen'
//const Earned = require('./src/components/earnedView');



export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    //   <View style={{flex:1, backgroundColor: '#ffffff'}}>
    //   <Text style={styles.welcome}>
    //     Sweet Money
    //   </Text>  
    //   <ActionButton buttonColor="rgba(231,76,60,1)">
    //     <ActionButton.Item buttonColor='#41b755' title="Agregar Ingreso" onPress={this.openViewEarned}>
    //       <Icon name="money" style={styles.actionButtonIcon} />
    //     </ActionButton.Item>
    //     <ActionButton.Item buttonColor='#be1e1e' title="Agregar Gasto" onPress={() => {}}>
    //       <Icon name="hand-scissors-o" style={styles.actionButtonIcon} />
    //     </ActionButton.Item>        
    //   </ActionButton>
    // </View>
    );
  }

  openViewEarned() {
    
  }
}

const AppStackNavigator = StackNavigator({
  Index: Index
})

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
