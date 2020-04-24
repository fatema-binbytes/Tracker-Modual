import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {state} from '../store/actions';

import styles from './district-styles';
import colors from '../theme/colors';
import stateWiseSubData from '../data/stateWise';

class District extends Component {
  constructor(props) {
    super(props);
  }

  renderHeader = (label, txtColor, style) => {
    return (
      <View style={[styles.headerContainer]}>
        <Text style={[{color: txtColor}, styles.label]}>
          {label.toUpperCase()}
        </Text>
      </View>
    );
  };
  item = (itemName, txtStyle, containerStyle) => {
    return (
      <View style={[containerStyle, styles.txtContainer]}>
        <Text style={txtStyle}>{itemName}</Text>
      </View>
    );
  };

  render() {
    const indexNumber = stateWiseSubData.findIndex(
      (x) => x.state === this.props.currentState,
    );
    const index = indexNumber === -1 ? 0 : indexNumber;
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            {this.renderHeader('DISCRITC', colors.headerTxt)}
            {this.renderHeader('CONFORMED', colors.headerTxt)}
          </View>

          <FlatList
            data={stateWiseSubData[index].districtData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    marginBottom: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0d0d0d',
                  }}>
                  {this.item(
                    item.district.replace(' ', '-').toUpperCase(),
                    {
                      textAlign: 'center',
                      color: colors.txtColor,
                      fontSize: 12,
                      fontWeight: 'bold',
                    },
                    {
                      width: Dimensions.get('screen').width / 2,
                    },
                  )}
                  {this.item(item.confirmed, {
                    textAlign: 'center',
                    color: colors.txtColor,
                  })}
                </View>
              );
            }}
            keyExtractor={(item, index) => `${index}`}
          />
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
export default connect(mapStateToProps, mapDispatchToProps)(District);
