import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.greyc9,
    borderRadius: 4,
    padding: 16,
    elevation: 2,
    alignItems: 'center',
  },
  txt: {
    color: colors.primary,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
