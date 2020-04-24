import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './chart-styles';
import Data from '../data/covidData';
import BezierLineChart from '../components/LineChart';
import colors from '../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import GraphData from '../utils/graphData';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: 'Beggning',
    };
  }

  getData = () => {
    const data =
      this.state.chart === 'Month'
        ? GraphData(Data.cases_time_series, 'Month')
        : this.state.chart === 'Week'
        ? GraphData(Data.cases_time_series, 'Week')
        : GraphData(Data.cases_time_series, 'Beggning');
    return data;
  };
  optionButton = (onPress, label) => {
    const style = {
      borderBottomWidth: 1,
      borderColor: colors.headerTxt,
      backgroundColor: '#222222',
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            padding: 10,
            flex: 1,
            alignItems: 'center',
            borderWidth: 0,
          },
          this.state.chart === label
            ? style
            : {borderWidth: 0, backgroundColor: '#171717'},
        ]}>
        <Text
          style={[
            this.state.chart === label
              ? {
                  color: '#fff',
                }
              : {color: '#ffffff99'},
            styles.txt,
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    const [data, label] = this.getData();
    return (
      <View style={styles.container}>
        <View style={[styles.optionView]}>
          {this.optionButton(
            () => this.setState({chart: 'Beggning'}),
            'Beggning',
          )}
          {this.optionButton(() => this.setState({chart: 'Month'}), 'Month')}
          {this.optionButton(() => this.setState({chart: 'Week'}), 'Week')}
        </View>
        <ScrollView>
          <View style={styles.chart}>
            <Text style={[styles.chartHeader, {color: '#fcf700'}]}>
              Confirmed
            </Text>

            <BezierLineChart
              chartColor={'rgba(134, 65, 244, 1)'}
              labels={label}
              data={data.map((x) => parseInt(x.dailyconfirmed))}
            />
          </View>
          <View style={styles.chart}>
            <Text style={[styles.chartHeader, {color: '#fcf700'}]}>
              Recovered
            </Text>

            <BezierLineChart
              chartColor={'rgba(125, 207, 58, 1)'}
              labels={label}
              data={data.map((x) => parseInt(x.dailyrecovered))}
            />
          </View>
          <View style={styles.chart}>
            <Text style={[{color: '#fcf700'}, styles.chartHeader]}>Deaths</Text>

            <BezierLineChart
              chartColor={'rgba(207, 58, 77)'}
              labels={label}
              data={data.map((x) => parseInt(x.dailydeceased))}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Chart;
