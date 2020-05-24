import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-360';
import { Easing } from 'react-native';

class Title extends React.Component {
    constructor() {
        super();
        // this.state = { slideLeft: new Animated.Value(-1), fadeIn: new Animated.Value(0)};
    }

    render() {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ 
                    fontSize: 50, 
                    textAlign: 'center', 
                    color: '#FFFFFF',
                    opacity: 1,
                    transform: [
                        {translateX: 500}
                    ]
                }}
                >
                VR Theatre
                </Text>
            </View>
        )
    }
}

export default Title;