import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';

import Button from '../components/Button';

import {auth} from '../store/actions';

import styles from './account-styles';

export class Account extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.loginStatus !== this.props.loginStatus) {
      if (this.props.loginStatus === null) {
        this.props.navigation.replace('Login');
      }
    }
  }

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const {name, email} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.txt}> {name} </Text>
          <Text style={styles.txt}> {email} </Text>
        </View>
        <Button
          title={'Logout'}
          onPress={this.onLogout}
          containerStyle={styles.btn}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.auth.get('loginStatus'),
  name: state.user.getIn(['info', 'name']),
  email: state.user.getIn(['info', 'email']),
});

const mapDispatchToProps = {
  logout: auth.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
