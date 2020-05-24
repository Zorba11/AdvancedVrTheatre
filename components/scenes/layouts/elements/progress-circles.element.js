import React from 'react';
import {
  View
} from 'react-360';
//Element
class ProgressCircles extends React.Component {
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
      backgroundColor: "#DBDAF1"
    }}
  >
  </View>

  <View
    style={{
      margin: 10,
      width: 80,
      borderRadius: 50,
      height: 80,
      backgroundColor: "#DBDAF1"
    }}
  >
  </View>
</View>
</View>
    )
  }
}
module.exports = ProgressCircles;