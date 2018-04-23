import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import photo from '../../assets/logos/kings.church.monogram.01.yellow.png';

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: (50 / 1.212),
  },
  medium: {
    width: 100,
    height: (100 / 1.212),
  },
  large: {
    width: 200,
    height: (200 / 1.212),
  },
  fluid: {
    flex: 1,
  },
});

const Logo = ({ size }) => <Image style={styles[size]} source={photo} />;

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 'medium',
};

export default Logo;
