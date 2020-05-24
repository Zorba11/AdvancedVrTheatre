import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  asset
} from 'react-360';

import TitleScene from './components/scenes/title.scene';
import Dashboard from './components/scenes/dashboard.scene';
import DashboardLayout from './components/scenes/layouts/dashboard.layout'

// <TitleScene showButton={true} text={'Watch a Flick !'} />
// <Dashboard text={"Select Environment"}/>

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
