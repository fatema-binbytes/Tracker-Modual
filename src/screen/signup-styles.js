import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  inputContainer: {
    marginTop: 28,
  },
  txtLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.grey3c,
    marginBottom: 16,
  },
  btn: {
    marginTop: 28,
  },
});

export default styles;
