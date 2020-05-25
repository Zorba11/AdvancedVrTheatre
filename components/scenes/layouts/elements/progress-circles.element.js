import React from 'react';
import {
  View
} from 'react-360';
//Element
class ProgressCircles extends React.Component {
  constructor() {
    super();
  }
render() {
    return (
<View>
<View
  style={{
    marginTop: 210,
    marginLeft: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>

  <View
    style={{
      margin: 10,
      width: 80,
      borderRadius: 50,
      height: 80,
      backgroundColor: this.props.color1
    }}
  >
  </View>

  <View
    style={{
      margin: 10,
      width: 80,
      borderRadius: 50,
      height: 80,
      backgroundColor: this.props.color2
    }}
  >
  </View>
</View>
</View>
    )
  }
}
module.exports = ProgressCircles;