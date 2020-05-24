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
                <TitleLayout  text={this.props.text} />
            </View>
        )
    }
}

export default TitleScene;