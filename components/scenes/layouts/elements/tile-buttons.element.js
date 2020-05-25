import React from 'react';
import {
    Text,
    View,
    VrButton
  } from 'react-360';
  //Element
  class TileButtons extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      console.log('props in tile', this.props);
      return (
        <View style={{marginTop: -10, marginLeft: 250, width: 550, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ margin: -70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: 2, borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(1) }>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[1], borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(2) }>
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
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[2], borderStyle: "solid" }}>
              <VrButton onClick={ () => this.props.updateStage(3) }>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[3], borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(4) }>
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
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[4], borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(5) }>
                <Text
                  style={{
                    fontSize: 80,
                    textAlign: 'center',
                    color: "#FFFFFF"
                  }}>
  
                </Text>
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[5], borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(6) }>
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