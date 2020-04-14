import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderColor: colors.accent,
  },
  input: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  txtLabel: {
    color: colors.grey6,
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: 0.4,
    marginBottom: 6,
  },
});

export default styles;
