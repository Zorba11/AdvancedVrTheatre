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
  constructor() {
    super();
    this.state = { streamURL: "" }
  }

  componentWillMount() {
    this.setState({ streamURL: 'http://player.twitch.tv/?channel=' + this.props.streamID })
  }

  render() {
    Environment.setBackgroundImage(asset(this.props.env));
    return (
      <View>
      <VideoPlayerLayout
        streamURL={this.state.streamURL}
        changeScenes={this.props.changeScenes}
        scene={this.props.scene}
        showButton={this.props.showButton}
        text={this.props.text}/>
      </View>
    )
  }
}
module.exports = VideoPlayer;