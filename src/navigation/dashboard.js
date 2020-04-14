import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tab1 from '../screen/Tab1';
import Tab2 from '../screen/Tab2';
import Tab3 from '../screen/Tab3';
import Account from '../screen/Account';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: false,
        labelStyle: {
          fontSize: 14,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Dashboard;
