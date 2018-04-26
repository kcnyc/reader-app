import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import { color, font } from '../lib/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    backgroundColor: color.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: color.slate,
    padding: 10,
    width: 200,
    borderRadius: 2,
    alignItems: 'center',
  },
  searchIcon: {
    flex: 1,
    color: color.slate,
  },
  searchBox: {
    backgroundColor: color.white,
    flex: 5,
  },
  searchText: {
    color: color.slate,
    fontSize: font.size.large,
  },
});

export default class Search extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '[k]NOCKOUT',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="search" color={color.slate} size={50} />
        <FormInput
          containerStyle={styles.searchBox}
          inputStyle={styles.searchText}
          placeholder="Search"
          placeholderTextColor={color.yellow}
        />
      </View>
    );
  }
}

Search.propTypes = {
  setParentState: PropTypes.func.isRequired,
};
