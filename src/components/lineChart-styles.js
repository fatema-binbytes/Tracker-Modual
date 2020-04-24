import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width - 25,
  },
  subContainer: {
    flexDirection: 'row',
    padding: 5,
  },
});

export default styles;
