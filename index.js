import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  asset
} from 'react-360';

import axios from 'react-native-axios';

import TitleScene from './components/scenes/title.scene';
import Dashboard from './components/scenes/dashboard.scene';
import DashboardLayout from './components/scenes/layouts/dashboard.layout';
import VideoPlayer from './components/scenes/video-player.scene';


export default class AdvancedTheatreVr extends React.Component {
  render() {

    Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));
    return (
      <View>
      <VideoPlayer showButton={true} text={"Back to Dashboard"}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('AdvancedTheatreVr', () => AdvancedTheatreVr);
