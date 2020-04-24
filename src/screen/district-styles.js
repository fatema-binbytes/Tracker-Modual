import {StyleSheet, Dimensions} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    margin: 15,
  },
  txtContainer: {
    width: Dimensions.get('screen').width / 3,
    padding: 5,
  },
  headerContainer: {
    padding: 5,
    width: Dimensions.get('screen').width / 3,
    // backgroundColor: colors.darkBackground,
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
