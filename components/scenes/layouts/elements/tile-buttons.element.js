import React from 'react';
import {
    Text,
    View,
    VrButton,
    Image
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
                <Image 
                  source={{uri: this.props.previews[0]}} 
                  style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[0], borderColor: "#A482DF"}} />
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(2) }>
              <Image 
                source={{uri: this.props.previews[1]}} 
                style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[1], borderColor: "#A482DF"}}/>
              </VrButton>
            </View>
          </View>
  
          <View style={{ margin: 70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderStyle: "solid" }}>
              <VrButton onClick={ () => this.props.updateStage(3) }>
              <Image source={{uri: this.props.previews[2]}} style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[2], borderColor: "#A482DF"}} />
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(4) }>
              <Image source={{uri: this.props.previews[3]}} style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[3], borderColor: "#A482DF"}} />
              </VrButton>
            </View>
          </View>
  
          <View style={{ margin: -70, width: 350, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(5) }>
              <Image source={{uri: this.props.previews[4]}} style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[4], borderColor: "#A482DF"}} />
              </VrButton>
            </View>
            <View style={{ margin: 25, height: 200, backgroundColor: "#CAB9E5", borderStyle: "solid"}}>
              <VrButton onClick={ () => this.props.updateStage(6) }>
              <Image source={{uri: this.props.previews[5]}} style={{ width: 300, height: 200, borderWidth: this.props.borderWidths[5], borderColor: "#A482DF"}} />
              </VrButton>
            </View>
          </View>
  
       </View>
      )
    }
  }

  module.exports = TileButtons;