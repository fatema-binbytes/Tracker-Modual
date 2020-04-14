import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';

import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

import {auth} from '../store/actions';

import LoginStatus from '../constants/auth';

import styles from './login-styles';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loginStatus: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loginStatus !== this.props.loginStatus) {
      if (this.props.loginStatus === LoginStatus.LOGIN) {
        this.props.navigation.replace('Dashboard');
      } else if (this.props.loginStatus === LoginStatus.IN_VALID_USER) {
        alert('Invalid Email & Password');
      }
    }
  }

  onLogin = () => {
    const {email, password} = this.state;
    if (
      email !== '' &&
      email !== null &&
      password !== '' &&
      password !== null
    ) {
      this.props.login({email, password});
    } else {
      alert('Empty field not allowed');
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Card>
          <Text style={styles.txtLogin}>Login</Text>
          <Input
            label={'Email'}
            value={email}
            onChangeText={(text) => this.setState({email: text})}
            keyboardType={'email-address'}
          />
          <Input
            label={'Password'}
            value={password}
            onChangeText={(text) => this.setState({password: text})}
            containerStyle={styles.inputContainer}
            secureTextEntry
          />
          <Button
            title={'Login'}
            containerStyle={styles.btn}
            onPress={this.onLogin}
          />
        </Card>
        <View style={styles.signupContainer}>
          <Button
            title={'Sing up'}
            onPress={() => this.props.navigation.navigate('Signup')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.auth.get('loginStatus'),
});

const mapDispatchToProps = {
  login: auth.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
