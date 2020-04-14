import React from 'react';
import {SafeAreaView} from 'react-native';

import Button from '../components/Button';

import {Toast} from '../utils/nativeModules';

const Tab1 = () => {
  return (
    <SafeAreaView>
      <Button title={'Check Native Event'} onPress={() => Toast.show()} />
    </SafeAreaView>
  );
};

export default Tab1;
