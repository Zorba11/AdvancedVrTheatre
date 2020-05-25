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

  this.state = { 
    scene: 1, 
    previews: '', 
    IDs: '', 
    selectedStreamID: '', 
    selectedEnv: '',
    environments: ["title-background.jpg", "Arizona.jpg", "Hawaii.jpg", "New Hampshire.jpg", "Texas.jpg", 'California.jpg']
  }
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

  captureSelection(stage, value) {
    switch (stage) {
      case 1:
        console.log('id..',this.state.IDs[value-1]);
        this.setState({selectedStreamID: this.state.IDs[value-1]});
        break;
      case 2:
        console.log('env..',this.state.environments[value-1]);
        this.setState({selectedEnv: this.state.environments[value-1]});
        break;
    }
  }

  gatherPreviews(response) {
    const previews = response.data.featured.map((item) => item.stream.preview.large);

    this.setState({ previews: previews });
  }

  gatherStreamIds(response) {
    const IDs = response.data.featured.map((item) => item.stream.channel.name);

    this.setState({IDs: IDs})
  }

  changeScenes(nextScene, selectionIndex) {
    switch (nextScene) {
      case 1:
        this.setState({scene: 1});
        break;
      case 2:
        this.setState({scene: 2});
        break;
      case 3:
        this.captureSelection(2, selectionIndex);
        this.setState({scene: 3});
        break;
    }
  }

  render() {
    Environment.setBackgroundImage(asset('title-background.jpg', {format: '2D'}));
    const scene = this.state.scene;
    return (
      <View>
      {scene === 1 ? (
        <TitleScene
          changeScenes={this.changeScenes.bind(this)}
          scene={this.state.scene}
          showButton={true}
          text={"Watch a Video"}/>
      ) : (
        scene === 2 ? (
          <Dashboard
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene}
            environments={this.state.environments}
            captureSelection={this.captureSelection.bind(this)}
            previews={this.state.previews}
            showButton={false}
            text={"Select Environment"}
          />
        ) : (
          <VideoPlayer
            changeScenes={this.changeScenes.bind(this)}
            scene={this.state.scene} 
            streamID={this.state.selectedStreamID} 
            env={this.state.selectedEnv} 
            showButton={true} 
            text={"Back to Dashboard"}
            />
        )
      )}
      </View>
    );
  }
};

AppRegistry.registerComponent('AdvancedTheatreVr', () => AdvancedTheatreVr);
