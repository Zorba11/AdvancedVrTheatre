import React from 'react';
import {
  View,
} from 'react-360';

import DashboardLayout from './layouts/dashboard.layout';


 //<VideoPlayer streamID={this.state.selectedStreamID} env={this.state.selectedEnv} showButton={true} text={"Back to Dashboard"}/>

class Dashboard extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <View>
                <DashboardLayout
                    changeScenes={this.props.changeScenes}
                    scene={this.props.scene}
                    environments={this.props.environments}
                    captureSelection={this.props.captureSelection} 
                    previews={this.props.previews} 
                    showButton={this.props.showButton} 
                    text={this.props.text} />
            </View>
        )
    }
}

export default Dashboard;