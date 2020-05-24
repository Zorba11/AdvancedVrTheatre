import React from 'react';
import {
    Text,
    View,
    VrButton
  } from 'react-360';
  //Element
  class TileButtons extends React.Component {

    render() {
      return (
        <View style={{marginTop: -10, marginLeft: 250, width: 550, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ margin: -70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
          </View>
  
          <View style={{ margin: 70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
          </View>
  
          <View style={{ margin: -70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5"}}>
              <VrButton>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
          </View>
  
       </View>
      )
    }
  }

  module.exports = TileButtons;