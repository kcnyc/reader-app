import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { color } from '../lib/styles';

const colorGradient = [color.black, color.slate, color.grey];

const AccordianHeader = ({
  level, label, onClick, selected,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: selected || 1,
      backgroundColor: colorGradient[level],
      alignItems: 'baseline',
      justifyContent: 'center',
      paddingLeft: 20,
    },
    text: {
      color: color.white,
      fontSize: 19,
    },
    headerText: {
      color: color.gold,
    },
  });
  return (
    <TouchableHighlight style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

AccordianHeader.propTypes = {
  level: PropTypes.number,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.number,
};

AccordianHeader.defaultProps = {
  level: 0,
  selected: 0,
};

export default AccordianHeader;
