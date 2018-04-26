import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { color } from '../lib/styles';
import { Header, Search } from '../common';

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
  otherActions: {
    flex: 1,
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
    const { setParentState } = this.props;
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Search />
          <View style={styles.otherAcitons}>
            <TouchableHighlight style={styles.button} onPress={() => setParentState({ currentPage: 'Browser' })}>
              <Text style={styles.headerText}>Browse</Text>
            </TouchableHighlight>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  setParentState: PropTypes.func.isRequired,
};
