import {StyleSheet, Dimensions} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-around',
  },
  txt: {fontSize: 18},
  chart: {
    flex: 1,
    margin: 10,
    backgroundColor: '#222222', //'#33333399',
    borderRadius: 5,
    elevation: 2,
    paddingBottom: 10,
  },
  chartHeader: {
    padding: 10,
    borderTopLeftRadius: 5,
    fontWeight: 'bold',
    borderTopRightRadius: 5,
    fontSize: 18,
    backgroundColor: '#171717',
  },
});

export default styles;
