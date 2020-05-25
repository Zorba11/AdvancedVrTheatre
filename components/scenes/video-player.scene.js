import React from 'react';
import {
  Text,
  View,
  asset,
  Environment
} from 'react-360';

import VideoPlayerLayout from './layouts/video-player.layout';
//Scene
class VideoPlayer extends React.Component {
  render() {
    // Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));
    return (
      <View>
      <VideoPlayerLayout showButton={this.props.showButton} text={this.props.text}/>
      </View>
    )
  }
}
module.exports = VideoPlayer;