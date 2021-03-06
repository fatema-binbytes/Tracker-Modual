import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import District from '../screen/District';
import Tab3 from '../screen/Tab3';
import Account from '../screen/Account';
import Home from '../screen/Home';
import colors from '../theme/colors';
import Chart from '../screen/Chart';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'yellow',
        showIcon: false,
        labelStyle: {
          fontSize: 16,
          padding: 8,
        },
        style: {
          borderTopWidth: 0,
        },
        tabStyle: {
          backgroundColor: colors.darkBackground,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  );
}

export default Dashboard;
