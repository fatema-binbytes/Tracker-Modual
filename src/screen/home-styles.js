import {StyleSheet, Dimensions} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.headerTxt,
    textAlign: 'center',
  },
  txtContainer: {
    width: Dimensions.get('window').width / 5 - 5,
    padding: 4,
    paddingVertical: 10,
  },
  headerContainer: {
    width: Dimensions.get('screen').width / 5 - 5,
    padding: 4,
    paddingVertical: 15,
    backgroundColor: colors.darkBackground,
  },
  itemContainer: {
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
  },
});

export default styles;
