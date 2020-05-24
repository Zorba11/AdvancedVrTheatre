import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  asset
} from 'react-360';

import TitleScene from './components/scenes/title.scene';

export default class AdvancedTheatreVr extends React.Component {
  render() {

    Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));

    return (
      <View>
        <TitleScene text={'Watch a Flick !'} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AdvancedTheatreVr', () => AdvancedTheatreVr);
