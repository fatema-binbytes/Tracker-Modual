import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {data} from '../store/actions';

class Splash extends Component {
  componentDidMount() {
    this.props.getData();
    setTimeout(() => {
      this.props.navigation.replace('Dashboard');
    }, 2000);
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../assets/COVID.png')}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          India COVID-19 Tracker
        </Text>
        <Text style={{padding: 4, color: '#333', fontSize: 16}}>
          A Crowdsourced Initiative
        </Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentState: state.data.get('state'),
});

const mapDispatchToProps = {
  getData: data.getData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
