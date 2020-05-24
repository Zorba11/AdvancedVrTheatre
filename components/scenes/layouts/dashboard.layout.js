import React from 'react';
import {
    View,
} from 'react-360';

import MenuButtons from './elements/menu-buttons.element';
import TileButtons from './elements/tile-buttons.element'
import ProgressCircles from './elements/progress-circles.element';
import Button from './elements/button.element';


class DashboardLayout extends React.Component {

    render() {
        return (
            <View>
            <View style={{
              width: 500,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              layoutOrigin: [50, 50],
              transform: [{translate: [0, 0, 300]}],
              marginTop: 180
            }}>
              <MenuButtons/>
              <TileButtons/>
              <ProgressCircles/>
            </View>
            <View style={{
              width: 500,
              height: 100,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              layoutOrigin: [50, 50],
              transform: [{translate: [0, 0, 300]}],
              marginTop: -180
            }}>
              <Button text={this.props.text}/>
            </View>
          </View>
          
        )
    }
}

export default DashboardLayout;