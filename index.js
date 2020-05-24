import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  asset
} from 'react-360';

import TitleScene from './components/scenes/title.scene';
import Dashboard from './components/scenes/dashboard.scene';

// <TitleScene text={'Watch a Flick !'} />

export default class AdvancedTheatreVr extends React.Component {
  render() {

    Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));
    return (
      <View>
        <Dashboard text={"Select Environment"}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('AdvancedTheatreVr', () => AdvancedTheatreVr);
