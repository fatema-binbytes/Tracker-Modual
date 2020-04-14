import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 36,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.greyc,
    elevation: 20,
    backgroundColor: colors.primary,
    width: '100%',
    marginBottom: 26,
  },
});

export default styles;
