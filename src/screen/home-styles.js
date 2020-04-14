import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize:25,
    color:colors.conformed,
    margin:15,
  },
  txtContainer: {
    minWidth:80,
    borderWidth:2,
    borderColor:'#fff',
    padding:5,
    },
  headerContainer:{
      padding:5,
      borderRadius:5,
        borderColor:'#fff',
      borderWidth:2,
      backgroundColor:colors.greyc3
  },
});

export default styles;
