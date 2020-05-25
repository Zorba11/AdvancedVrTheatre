import React from 'react';
import {
  asset,
  Text,
  View,
  Environment
} from 'react-360';

import TitleLayout from './layouts/title.layout';

class TitleScene extends React.Component {
    render() {

        return (
            <View>
                <TitleLayout
                changeScenes={this.props.changeScenes}
                scene={this.props.scene}
                showButton={this.props.showButton}  
                text={this.props.text} />
            </View>
        )
    }
}

export default TitleScene;