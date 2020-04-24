import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {state} from '../store/actions';
import Data from '../data/covidData';
import styles from './home-styles';
import colors from '../theme/colors';

class Home extends Component {
  renderHeader = (label) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>{label.toUpperCase()}</Text>
      </View>
    );
  };
  item = (itemName, txtStyle) => {
    return (
      <View style={[styles.txtContainer]}>
        <Text style={txtStyle}>{itemName}</Text>
      </View>
    );
  };
  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          this.props.setState(item.state);
          this.props.navigation.navigate('District');
        }}>
        {this.item(item.state.replace(' ', '-').toUpperCase(), {
          textAlign: 'center',
          fontSize: 12,
          color: colors.txtColor,
        })}
        {this.item(item.confirmed, {
          textAlign: 'center',
          color: colors.txtColor,
        })}
        {this.item(item.active, {
          textAlign: 'center',
          color: colors.txtColor,
        })}
        {this.item(item.recovered, {
          textAlign: 'center',
          color: colors.recovered,
        })}
        {this.item(item.deaths, {
          textAlign: 'center',
          color: colors.deaths,
        })}
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            {this.renderHeader('State/UT')}
            {this.renderHeader('Confirm')}
            {this.renderHeader('Active')}
            {this.renderHeader('Recover')}
            {this.renderHeader('Deaths')}
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={Data.statewise}
              renderItem={({item, index}) => {
                return this.renderItem(item, index);
              }}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentState: state.state.get('state'),
});

const mapDispatchToProps = {
  setState: state.setState,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
