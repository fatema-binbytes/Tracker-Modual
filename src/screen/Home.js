import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {data} from '../store/actions';

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
    if (item.confirmed != 0) {
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            item.state === 'Total'
              ? console.log('Total')
              : (this.props.setState(item.state),
                this.props.navigation.navigate('District'));
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
    }
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
            {this.props.currentData == null ? (
              <View>
                <ActivityIndicator color={'#fff'} />
              </View>
            ) : (
              <FlatList
                data={this.props.currentData.toJS().statewise}
                renderItem={({item, index}) => {
                  return this.renderItem(item, index);
                }}
                keyExtractor={(item, index) => `${index}`}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  currentData: state.data.get('data'),
});

const mapDispatchToProps = {
  setState: data.setState,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
