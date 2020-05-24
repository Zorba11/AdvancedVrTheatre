import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-360';

import Title from './elements/title.element.js';
import Button from './elements/button.element.js';

class TitleLayout extends React.Component {
    render() {
        return (
            <View 
                style={{
                    height: 1500,
                    width: 800,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translate: [-150, 400, 0]}]
                }}
            >
                <Title />
                <Button text={this.props.text} />
                        </View>
        )
    }
}

export default TitleLayout;