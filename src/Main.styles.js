import { StyleSheet } from 'react-native';
import { color } from './lib/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.slate,
  },
  headerText: {
    color: color.gold,
    fontSize: 19,
  },
});
