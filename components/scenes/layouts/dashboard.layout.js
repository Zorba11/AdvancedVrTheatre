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
  constructor() {
    super();
    this.state = { slideLeft: new Animated.Value(-1), fadeIn: new Animated.Value(0)};
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
    render() {
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
              <TileButtons/>
              <ProgressCircles/>
            </Animated.View>
            <View style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 120
            }}>
            <Button  text={this.props.text}/>
            </View>
          </View>
        )
    }
}

export default DashboardLayout;