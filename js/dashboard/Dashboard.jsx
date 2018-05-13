import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import ActionItem from './Action-Item';
import { color } from '../lib/styles';
import { Header, Search } from '../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'flex-start',
    height: 250,
  },
});

const Dashboard = ({ setParentState }) => (
  <React.Fragment>
    <Header />
    <View style={styles.container} />
    <Search />
    <View style={styles.container} />
    <View style={styles.actionButtons}>
      <ActionItem
        text="Browse"
        iconName="search"
        onPress={() => setParentState({ currentPage: 'Browser' })}
      />
      <ActionItem
        text="Daily Reading Plans"
        iconName="date-range"
        onPress={() => setParentState({ currentPage: 'Daily Reading Plans' })}
      />
      <ActionItem
        text="Milestones"
        iconName="terrain"
        onPress={() => setParentState({ currentPage: 'Milestones' })}
      />
      <ActionItem
        text="Guided Devotional"
        iconName="map"
        onPress={() => setParentState({ currentPage: 'Guided Devotional' })}
      />
      <ActionItem
        text="Review Notes"
        iconName="edit"
        onPress={() => setParentState({ currentPage: 'Review Notes' })}
      />
    </View>
    <View style={styles.container} />
  </React.Fragment>
);

Dashboard.propTypes = {
  setParentState: PropTypes.func.isRequired,
};

export default Dashboard;
