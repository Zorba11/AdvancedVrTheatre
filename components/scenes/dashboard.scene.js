import React from 'react';
import {
  View,
} from 'react-360';

import DashboardLayout from './layouts/dashboard.layout';


class Dashboard extends React.Component {

    render() {
        return (
            <View>
                <DashboardLayout text={this.props.text} />
            </View>
        )
    }
}

export default Dashboard;