import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Container, Content, Spinner, Picker } from 'native-base';
import { MapView } from 'expo';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions/'; //Import your actions

import {Actions} from 'react-native-router-flux'

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {type: "art"};

        this.props.getSections();
        this.props.getTypes();

        this.openSection = this.openSection.bind(this);
    }

    openSection(section, event) {
        console.log(section.description)
        Actions.view({title: section.description, section: section})
    }

    render() {
        
        if (this.props.loading) {
            return (
                <Container>
                    <Content>
                        <Spinner />
                    </Content>
                </Container>
            );
        } else {
            return ( 
              <Container>
                <MapView style={styles.map}
                    moveOnMarkerPress={false}
                    initialRegion={{ 
                        latitude: 55.801244, 
                        longitude: 37.618423, 
                        latitudeDelta: 0.0322, 
                        longitudeDelta: 0.0121 }} 
                > 
                  {this.props.sections
                    .filter(section => 
                        section.type === this.state.type
                        || this.state.type === "any")
                    .map((section, index) => (
                        <MapView.Marker
                              onPress={(event) => this.openSection(section, event)}
                              identifier={`marker_${index}`}
                              key={`marker_${index}`}
                              coordinate={{ 
                                    latitude: section.latitude, 
                                    longitude: section.longitude }}
                            />
                  ))}
                </MapView>
                <View style={styles.picker}>
                    <Picker
                      mode="dropdown"
                      selectedValue={this.state.type}
                      onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                      <Picker.Item
                              key={`type_any`}
                              label="Any" value="any"
                            />
                      {this.props.types.map((type, index) => (
                        <Picker.Item
                              key={`type_${index}`}
                              label={type.value} value={type.code}
                            />
                      ))}
                    </Picker>
                </View>
              </Container>
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        sections: state.dataReducer.sections,
        types: state.dataReducer.types
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);

const styles = StyleSheet.create({
   map: {
    flex: 1
  },

  picker: {
    position: 'absolute',
    top: 40,
    left: 40,
    height: 50, 
    width: 150,
    backgroundColor: 'rgba(50, 150, 50, 0.8)'
  }
});