import React from 'react';
import {
  View,
  Animated
} from 'react-360';
import { Easing } from 'react-native';

import MenuButtons from './elements/menu-buttons.element';
import TileButtons from './elements/tile-buttons.element'
import ProgressCircles from './elements/progress-circles.element';
import Button from './elements/button.element';


class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideLeft: new Animated.Value(-1), 
      fadeIn: new Animated.Value(0), 
      showButton: false,
      color1: "#A482DF", 
      color2: "#DBDAF1",
      text: this.props.text,
      borderWidths: [0, 0, 0, 0, 0, 0]
      }   
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.ease
          }
        )
      ])
    ]).start();
  }

  updateStage(input) {
    if(this.state.showButton === false) {
      this.setState({showButton: true});
    }
  switch (input) {
      case 1:
        this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
        break;
      case 2:
        this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
        break;
      case 3:
        this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
        break;
      case 4:
        this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
        break;
      case 5:
        this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
        break;
      case 6:
        this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
        break;
    }
  }

  updateScene() {
    this.setState({color1: "#DBDAF1", color2: "#A482DF", text: "Watch Video"});
  }

    render() {
     console.log('state..', this.state);
        return (
          <View>
          <Animated.View style={{
              marginLeft: -105,
              marginTop: 100,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              opacity: this.state.fadeIn,
              transform: [
                {translateX: this.state.slideLeft},
                {translateZ: -3}
              ],
              width: 500
            }}>
              <MenuButtons/>
              <TileButtons updateStage={this.updateStage.bind(this)} borderWidths={this.state.borderWidths}/>
              <ProgressCircles color1={this.state.color1} color2={this.state.color2}/>
            </Animated.View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 120
            }}>
            <Button updateScene={this.updateScene.bind(this)} showButton={this.state.showButton} text={this.state.text}/>
            </View>
          </View>
        )
    }
}

export default DashboardLayout;