import React from "react";
import { Text, View, VrButton, Animated } from "react-360";
import { Easing } from "react-native";

class Button extends React.Component {
  constructor(props) {
    super(props);
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

    const stage = this.props.stage;
    const currentScene = this.props.scene;
    const selectionIndex = this.props.selectionIndex;

    let nextScene;
    switch (currentScene) {
      case 1:
        nextScene = 2;
        break;
      case 2:
        nextScene = 3;
        break;
      case 3:
        nextScene = 1;
        break;
    }

    return (
      <View>
        {
            this.props.showButton? (
                <Animated.View
                style={{
                  marginTop: 50,
                  height: 70,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor: "#A482DF",
                  borderRadius: 35,
                  opacity: this.state.fadeIn,
                  transform: [{ translateX: this.state.slideRight }],
                }}
              >
               {currentScene === 2 ? (
                <VrButton onClick={() => { 
                    switch (stage) {
                      case 1:
                        this.props.updateScene();
                        break;
                      case 2:
                        this.props.changeScenes(nextScene, selectionIndex);
                        break;
                    }
                }}>
                <Text
                  style={{
                    fontSize: 50,
                    textAlign: "center",
                    color: "#CAB9E5",
                    marginTop: 5
                  }}
                >
                  {this.props.text}
                </Text>
              </VrButton>
               ) : ( 
                <VrButton onClick={() => this.props.changeScenes(nextScene)}>
                <Text
                  style={{
                    fontSize: 50,
                    textAlign: "center",
                    color: "#CAB9E5",
                    marginTop: 5
                  }}
                >
                  {this.props.text}
                </Text>
              </VrButton>
               )}
              </Animated.View>
            ) :(
                <View></View>
            )
        }
      </View>
    )
  }
}

export default Button;
