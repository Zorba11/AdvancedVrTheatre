import React from 'react';
import {
  Text,
  View,
  VrButton,
  Animated
} from 'react-360';
import { Easing } from 'react-native';

class Button extends React.Component {
    constructor() {
        super();
        this.state = { slideRight: new Animated.Value(-1), fadeIn: new Animated.Value(0)};
    }

    componentDidMount() {
        
      }
    
    render() {
        return (
            <View style={{
                height: 80,
                width: 420,
                backgroundColor: '#A482DF',
                borderRadius: 35,
                opacity: 1,
                transform: [
                    {translateX: 500}
                ]
            }}>
                <VrButton>
                    <Text style={{
                        fontSize: 50,
                        textAlign: 'center',
                        color: "#FFFFFF"
                    }}>
                    {this.props.text}
                    </Text>
                </VrButton>
            </View>
        )
    }
}

export default Button;