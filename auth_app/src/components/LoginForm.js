import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Card, CardSection, Spinner} from './common';
import firebase from 'firebase';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };


  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        buttonName='Log In'>
      </Button>
    );
  }


  onButtonPress() {
    const {email, password} = this.state;
    this.setState( {error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', 'error': '', loading: false});
  }

  onLoginFail() {
    this.setState({'error': 'Authentication Failed.', loading: false});
  }

  render() {
    return (
      <Card>
        <CardSection>
        <Input
        label={"Email:"}
        placeholder={'user@gmail.com'}
        value={this.state.email}
        onChangeText={text=>this.setState(previousState => {return {email:text, password: previousState.password}})}/>
        </CardSection>
        <CardSection>
        <Input
        label={"Password:"}
        placeholder={'password'}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={text=>this.setState(previousState => {return {email: previousState.email, password:text}})}/>
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
