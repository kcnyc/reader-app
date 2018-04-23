import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { color } from '../lib/styles';
import { Header } from '../common';

export const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: color.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: color.slate,
  },
  headerText: {
    color: color.yellow,
    fontSize: 19,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: color.slate,
    padding: 10,
    width: 200,
    borderRadius: 2,
    alignItems: 'center',
  },
});

export default class Dashboard extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '[k]NOCKOUT',
    };
  }
  render() {
    const { title } = this.state;
    const { setParentState } = this.props;
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.text}>I read things REAL real fast</Text>
          <TouchableHighlight style={styles.button} onPress={() => setParentState({ currentPage: 'Browser' })}>
            <Text style={styles.headerText}>Browse</Text>
          </TouchableHighlight>
        </View>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  setParentState: PropTypes.func.isRequired,
};
