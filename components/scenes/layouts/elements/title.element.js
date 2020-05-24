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
        this.state = { slideLeft: new Animated.Value(300), fadeIn: new Animated.Value(0)};
    }

    componentDidMount() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.slideLeft,
                    {
                        toValue: 500,
                        duration: 3000,
                        easing: Easing.ease
                    }),
                    Animated.timing(
                        this.state.fadeIn,
                        {
                         toValue: 1,
                         duration: 3000,
                         easing: Easing.ease
                        }
                      )
            ]
            )
        ]).start();
    }

    render() {
        return (
            <View>
                <Animated.Text style={{
                    fontSize: 50,
                    textAlign: 'center', 
                    color: '#FFFFFF',
                    opacity: this.state.fadeIn,
                    transform: [
                        {
                            translateX: this.state.slideLeft
                        }
                    ]

                }}
                >
                VR Theatre
                </Animated.Text>
            </View>
        )
    }
}

export default Title;