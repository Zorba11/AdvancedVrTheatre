import React from 'react';
import {
  View
} from 'react-360';

import VideoElement from './elements/video-player.element';
import Button from './elements/button.element';
//Layout
class VideoPlayerLayout extends React.Component {
render() {
    return (
      <View>
        <View style={{
          flex: 10,
          marginTop: 120,
          marginLeft: 150,
          width: 1200,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#333333',
          
        }}>
        <VideoElement/>
        </View>
      <View style={{
          flex: 1,
          width: 550,
          height: 500,
          flexDirection: 'column',
          alignItems: 'stretch',
          transform: [{translate: [0, 30, 100]} ]
        }}>

<Button showButton={this.props.showButton} text={this.props.text}/>
        </View>
      </View>
    )
  }
}
module.exports = VideoPlayerLayout;