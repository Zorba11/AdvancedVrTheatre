import React from 'react';
import {
  View,
} from 'react-360';

import DashboardLayout from './layouts/dashboard.layout';


class Dashboard extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <View>
                <DashboardLayout previews={this.props.previews} showButton={this.props.showButton} text={this.props.text} />
            </View>
        )
    }
}

export default Dashboard;