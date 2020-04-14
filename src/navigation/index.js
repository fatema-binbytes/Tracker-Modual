import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Dashboard from './dashboard';

import LoginStatus from '../constants/auth';
import Splash from '../screen/Splash';

const AuthStack = createStackNavigator();

class RootNavigation extends React.Component {
  render() {
    const initialRouteName =
      this.props.loginStatus === LoginStatus.LOGIN ? 'Splash' : 'Login';
    return (
      <NavigationContainer>
        <AuthStack.Navigator
          headerMode={'none'}
          initialRouteName={initialRouteName}
          >
          <AuthStack.Screen name={'Splash'} component={Splash} />
          <AuthStack.Screen name={'Login'} component={Login} />
          <AuthStack.Screen name={'Signup'} component={Signup} />
          <AuthStack.Screen name={'Dashboard'} component={Dashboard} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.auth.get('loginStatus'),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
