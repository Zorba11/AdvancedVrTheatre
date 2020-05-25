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

// <VideoPlayer showButton={true} text={"Back to Dashboard"}/>


export default class AdvancedTheatreVr extends React.Component {
constructor() {
  super()

  this.state = { previews: '' };
}

  componentWillMount() {
    const limit = 6;
    const client_id = 'mz66tjas6ckcfmtxb4nzub52z6n8s2'
    const featuredStreamUrl = `https://api.twitch.tv/kraken/streams/featured?limit=${limit}&client_id=${client_id}`;
    axios.get(featuredStreamUrl, {
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    })
     .then(response => {
        console.log(response);
        this.gatherPreviews(response);
        this.gatherStreamIds(response);
      })
       .catch(err =>{
         console.log(err);
       });
  }

  gatherPreviews(response) {
    const previews = response.data.featured.map((item) => item.stream.preview.large);

    this.setState({ previews: previews });
  }

  gatherStreamIds(response) {
    const IDs = response.data.featured.map((item) => item.stream._id);

    console.log(IDs);
  }

  render() {
    Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));
    return (
      <View>
        <Dashboard 
          previews={this.state.previews} 
          showButton={false}
          text={'Select Environment'} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AdvancedTheatreVr', () => AdvancedTheatreVr);
