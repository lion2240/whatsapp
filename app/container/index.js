
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {StackNavigator} from 'react-navigation';
// import * as reducers from '../reducers';
import Components from '../components/';

import Chats from '../components/chats'
import Home from '../components/threeTabs'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  render() {
    return (
      <View
       style={{ flex:1 }}>
       <StatusBar barStyle="light-content" />
       {/*<Provider store={store}>*/}
        <Home></Home>
       {/*</Provider>*/}
      </View>
    );
  }
}
