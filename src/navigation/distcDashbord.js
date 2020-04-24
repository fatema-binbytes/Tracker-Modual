import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import District from '../screen/District';
import Tab3 from '../screen/Tab3';
import Account from '../screen/Account';
import Home from '../screen/District';
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
          fontSize: 14,
        },
        tabStyle: {
          backgroundColor: colors.darkBackground,
        },
      }}>
      <Tab.Screen name="District" component={Home} />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  );
}

export default Dashboard;
