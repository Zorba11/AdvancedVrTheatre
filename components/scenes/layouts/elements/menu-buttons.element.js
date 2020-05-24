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
            margin: 300,
            width: 300,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              margin: 300,
              height: 500,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 150,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
              Twitch
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 300,
              height: 500,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 150,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
  
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 300,
              height: 500,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 150,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
  
              </Text>
            </VrButton>
          </View>
  
          <View
            style={{
              margin: 300,
              height: 500,
              backgroundColor: "#898794"
            }}
          >
            <VrButton>
              <Text
                style={{
                  fontSize: 150,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>
  
              </Text>
            </VrButton>
          </View>
  
        </View>
      )
    }
  }

module.exports = MenuButtons;