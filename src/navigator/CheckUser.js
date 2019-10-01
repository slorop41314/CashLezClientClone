import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


class CheckLogin extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    try {
      //Cek Token Pas Awal
      const fetchDataMentah = await AsyncStorage.getItem('userToken');
      const fetchDataUserJSON = await AsyncStorage.getItem('userData');
      console.log(`userToken Nya : ${fetchDataMentah}`)
      console.log(`userData Nya : ${fetchDataUserJSON}`)
      if (fetchDataUserJSON != null) {
        this.props.navigation.navigate('MemberNavigator')
      }
      else {
        this.props.navigation.navigate('GuestNavigator')
      }
    } catch (e) {
      alert(e)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 300 ,justifyContent:"center",alignContent:"center"}}
          source={require('../screen/component/staticimage/loading.png')}
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
    backgroundColor: '#fff'
    
  }
})

//export default App;
export default CheckLogin;