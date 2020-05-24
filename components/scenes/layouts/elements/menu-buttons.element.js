import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-360';
//Element
class MenuButtons extends React.Component {

    render() {
      return (
        <View
          style={{
            marginLeft: 65,
            marginTop: 20,
            width: 400,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              margin: 25,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 80,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
              Twitch
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 25,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 80,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
                NetFlix
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 25,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 80,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
                Prime
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 25,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 80,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
                HBO
              </Text>
            </VrButton>
          </View>
  
        </View>
      )
    }
  }

module.exports = MenuButtons;