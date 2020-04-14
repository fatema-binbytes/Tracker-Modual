import React from 'react';
import {View, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './input-styles';

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.txtLabel}>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  containerStyle: PropTypes.object,
};

export default Input;
