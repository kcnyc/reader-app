import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AccordianHeader from './AccordianHeader';
import { color } from '../lib/styles';
import { Header } from '../common';
import Bible from '../../assets/text/bible.json';

export const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: color.white,
    width: '100%',
  },
  text: {
    color: color.slate,
  },
  headerText: {
    color: color.gold,
    fontSize: 19,
  },
});

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      listLength: Bible.books.length,
      currentBook: 0,
    };
  }
  render() {
    const { listLength, currentBook } = this.state;
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            {
              Bible.books.map((book, i) => (<AccordianHeader
                key={`Browser${book.h[0]}`}
                label={book.h[0]}
                selected={currentBook === i ? listLength : 0}
                onClick={() => {}}
              />))
            }
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}
