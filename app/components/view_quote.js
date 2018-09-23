import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

class ViewQuote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            author: props.quote.author,
            quote: props.quote.quote
        };
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                    <Text style={[styles.title]}>{this.state.author}</Text>
                    <Text style={[styles.quote]}>{this.state.quote}</Text>
                </View>
            </View>
        );
    }

}

//Connect everything
export default connect(null, null)(ViewQuote);

var styles = StyleSheet.create({
    saveBtn:{
        width: windowWidth,
        height: 44,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"#6B9EFA"
    },

    buttonText:{
        fontWeight: "500",
    },

    quote: {
        fontSize: 17,
        lineHeight: 38,
        color: "#333333",
        padding: 16,
        paddingLeft:0,
        flex:1,
        height: 200,
        marginBottom:50,
        borderTopWidth: 1,
        borderColor: "rgba(212,211,211, 0.3)"
    },

    title: {
        fontWeight: "400",
        lineHeight: 22,
        fontSize: 16,
        height:25+32,
        padding: 16,
        paddingLeft:0
    },
});