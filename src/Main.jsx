import React from 'react';
import { Text, View } from 'react-native';
import styles from './Main.styles';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '[K]nockout',
    };
  }
  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.text}>I read things REAL fast</Text>
      </View>
    );
  }
}
