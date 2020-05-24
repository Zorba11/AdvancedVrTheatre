import React from "react";
import { Text, View, VrButton, Animated } from "react-360";
import { Easing } from "react-native";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      slideRight: new Animated.Value(700),
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
        Animated.parallel([
            Animated.timing(
                this.state.slideRight,
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
        <Animated.View
        style={{
          marginTop: 50,
          height: 70,
          paddingLeft: 25,
          paddingRight: 25,
          backgroundColor: "#3889f2",
          borderRadius: 35,
          opacity: this.state.fadeIn,
          transform: [{ translateX: this.state.slideRight }],
        }}
      >
        <VrButton>
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {this.props.text}
          </Text>
        </VrButton>
      </Animated.View>
    )
  }
}

export default Button;
