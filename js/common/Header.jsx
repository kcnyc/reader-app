import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color, font } from '../lib/styles';
import { Logo } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.white,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 30,
  },
  rowItem: {
    flex: 1,
    alignItems: 'baseline',
  },
  subtitleText: {
    color: color.slate,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: font.size.small,
  },
  titleText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: font.size.large,
  },
});

export default class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '[k]NOCKOUT',
      subtitle: 'BIBLE READING',
    };
  }
  render() {
    const { title, subtitle } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.rowItem}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <Logo style={styles.rowItem} size="small" />
      </View>
    );
  }
}
