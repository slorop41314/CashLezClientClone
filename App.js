import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { YellowBox } from 'react-native'
 
import AppNavigator from './src/App'
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  ]);

import store from './src/redux/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

