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
        <View style={{marginTop: -90, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ margin: 100, width: 300, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
  
          <View style={{ margin: 100, width: 300, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
  
          <View style={{ margin: 100, width: 300, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
            <View style={{ margin: 100, height: 300, backgroundColor: "#CAB9E5"}}>
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
  
       </View>
      )
    }
  }

  module.exports = TileButtons;