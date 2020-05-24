import React from 'react';
import {
  View
} from 'react-360';
//Element
class ProgressCircles extends React.Component {
render() {
    return (
<View>
//Column
<View
  style={{
    margin: 100,
    width: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>

  <View
    style={{
      margin: 100,
      width: 100,
      borderRadius: 300,
      height: 400,
      backgroundColor: "#DBDAF1"
    }}
  >
  </View>

  <View
    style={{
      margin: 100,
      width: 100,
      borderRadius: 300,
      height: 400,
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