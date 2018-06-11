import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header, Button, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {loggedIn: null}

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDcTGM09vnJrmR4SCL8BnkozQPoZVtaFlg",
      authDomain: "auth-aea69.firebaseapp.com",
      databaseURL: "https://auth-aea69.firebaseio.com",
      projectId: "auth-aea69",
      storageBucket: "auth-aea69.appspot.com",
      messagingSenderId: "299252379186"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }
      else {
        this.setState({loggedIn: false});
      }
    });

  }

  renderContent() {
    switch (this.state.loggedIn) {

      case true:
        return (
          <Button onPress={()=>firebase.auth().signOut()} buttonName={'Log Out'}>
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"></Spinner>
    }
  }


  render() {
    return (
      <View>
      <Header headerText='Authentication'></Header>
      {this.renderContent()}
      </View>
  )
  };
}
