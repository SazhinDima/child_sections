import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Map from './components/map'
import ViewSection from './components/view'
import Chat from './components/chat'

import Data from './sections.json'

import {connect} from 'react-redux';
import { getSections, getTypes } from './actions'

class Main extends Component {

    componentDidMount() {
        var _this = this;
        AsyncStorage.clear();
        //Check if any data exist
        AsyncStorage.getItem('sections', (err, data) => {
            //if it doesn't exist, extract from json file
            //save the initial data in Async
            if (data === null){
                AsyncStorage.setItem('sections', JSON.stringify(Data.sections));
                AsyncStorage.setItem('types', JSON.stringify(Data.types));
                _this.props.getSections();
            }
        });
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="map" component={Map} title="Map" initial/>
                    <Scene key="view" component={ViewSection} title="View"/>
                    <Scene key="chat" component={Chat} title="Chat"/>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null, { getSections, getTypes })(Main);