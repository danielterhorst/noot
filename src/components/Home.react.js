'use strict';

import React from 'react-native';
import Clock from './Clock.react';

let {
  View,
  Text,
  StyleSheet,
  PixelRatio,
} = React;

class Home extends React.Component {

  render() {
    return (
        <View style={Style.container}>
          <View style={Style.row}>
            <View style={[Style.box, Style.clock]}>
              <Clock />
            </View>
            <View style={Style.box}>
              <Text>Top Right</Text>
            </View>
          </View>
          <View style={Style.row}>
            <View style={Style.box}>
              <Text>Bottom Left</Text>
            </View>
            <View style={Style.box}>
              <Text>Bottom Right</Text>
            </View>
          </View>
        </View>
    );
  }

}

let Style = StyleSheet.create({

  container: {
    flex: 1,
  },

  row: {
    flex: 0.5,
    flexDirection: 'row',
  },

  box: {
    flex: 0.5,
    margin: 15,
    padding: 15,

    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30 / PixelRatio.get(),
  },

  clock: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Home;
