import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { color, font } from '../lib/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: color.slate,
    fontSize: font.size.medium,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: color.redSoft,
    flex: 1,
    padding: 10,
    borderRadius: 2,
    // alignItems: 'flex-start',
  },
});

export default function ActionItem({
  text, iconName, onPress, style, textStyle, iconStyle, ...rest
}) {
  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      {...rest}
    >
      <View style={styles.container}>
        <Icon name={iconName} style={iconStyle} />
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

ActionItem.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  iconStyle: ViewPropTypes.style,
};

ActionItem.defaultProps = {
  style: styles.button,
  textStyle: styles.text,
  iconStyle: styles.icon,
};
