import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './card-styles';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Card;
