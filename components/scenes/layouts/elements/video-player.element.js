import React from 'react';
import { asset, View, Video} from 'react-360';




// <iframe style={{width: 1200, height: 700}} source={{uri: this.props.streamURL}} />

class VideoElement extends React.Component {
  render() {
    return (
    <View style={{width:800, height: 700}}>
      <Video style={{width: 1200, height: 700}} source={asset('pan.mp4')} />
    </View>
    )
  }
}

module.exports = VideoElement;