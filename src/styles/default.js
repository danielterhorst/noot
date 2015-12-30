'use strict';

import React from 'react-native';
let {
    StyleSheet
} = React;

let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');

let Style = StyleSheet.create({
    contentContainer: {
        width: windowSize.width,
        height: windowSize.height,

        flex: 1,
        flexDirection: 'column',

        backgroundColor: "#CCC"

    },
    content: {
        flex: .8,
        backgroundColor: "#FFF",
    },
    menu: {
        flex: .2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingBottom: 5
    },
    button: {

        width: 125,

        paddingTop: 25,
        paddingBottom: 20,

        backgroundColor: "#CCC",

        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'transparent',
        borderTopColor: '#AAA',
    },
    button_active: {
        backgroundColor: "#FFF",
        borderTopColor: 'transparent',
        borderLeftColor: '#AAA',
        borderRightColor: '#AAA',
        borderBottomColor: '#AAA',
    },
    button_icon: {
        flex: 0.7,
        color: "#333",
    },
    button_text: {
        flex: 0.3,
        textAlign: 'center',
        color: "#333",
    }

});

export default Style;
