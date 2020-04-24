import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import * as shape from 'd3-shape';
import {AreaChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';
import styles from './lineChart-styles';

class LineChart extends Component {
  render() {
    const {labels, data} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <YAxis
            style={{marginHorizontal: 5}}
            data={data}
            contentInset={{top: 20, bottom: 20}}
            svg={{
              fill: 'grey',
              fontSize: 12,
            }}
            numberOfTicks={5}
            formatLabel={(value) => value}
          />
          <View style={{flex: 1}}>
            <AreaChart
              style={{height: 200}}
              data={data}
              contentInset={{top: 20, bottom: 20, left: 1}}
              curve={shape.curveNatural}
              svg={{fill: this.props.chartColor}}>
              <Grid />
            </AreaChart>
          </View>
        </View>
        <XAxis
          data={labels}
          formatLabel={(value, index) => `${labels[index]}`}
          numberOfTicks={3}
          contentInset={{left: 50, right: 20}}
          svg={{fontSize: 12, fill: 'grey'}}
        />
      </View>
    );
  }
}

export default LineChart;
