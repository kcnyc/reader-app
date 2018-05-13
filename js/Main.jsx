import React from 'react';
import { Text, View } from 'react-native';
import Dashboard from './dashboard';
import Browser from './Browser';
import styles from './Main.styles';

const pages = {
  Dashboard,
  Browser,
};

export default class Main extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '[k]NOCKOUT',
      isLoading: true,
      currentPage: 'Dashboard',
    };
    this.renderSplashPage = this.renderSplashPage.bind(this);
    this.renderCurrentComponent = this.renderCurrentComponent.bind(this);
    this.setParentState = this.setParentState.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setState.bind(this, { isLoading: false }), 1800);
  }

  setParentState(newState) {
    return this.setState(newState);
  }

  renderSplashPage() {
    const { title } = this.state;
    return (
      <React.Fragment>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.text}>I read things REAL fast</Text>
      </React.Fragment>
    );
  }

  renderCurrentComponent() {
    const CurrentPage = pages[this.state.currentPage];
    return <CurrentPage setParentState={this.setParentState} />;
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? this.renderSplashPage() : this.renderCurrentComponent() }
      </View>
    );
  }
}
