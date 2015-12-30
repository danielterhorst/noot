'use strict';

import React from 'react-native';
import TimerMixin from 'react-timer-mixin';
import moment from 'moment';
import 'moment/locale/nl';


let {
    Text,
    StyleSheet,
    View,
} = React;

// Set global locale
moment.locale('nl');

class Clock extends React.Component {

  displayName = 'Clock';

  propTypes = {
    date: React.PropTypes.string,
    time: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.props = {
      'date': moment().format('dddd D MMMM YYYY'),
      'time': moment().format('HH:mm'),
    };
  }

  componentDidMount() {
    /* Update every minute */
    TimerMixin.setInterval(this.tick, 1000 * 60);
  }

  tick() {
    this.props['date'] = moment().format('dddd D MMMM YYYY');
    this.props['time'] = moment().format('HH:mm');
  }

  render() {
    return (
        <View style={Style.container}>
          <Text style={Style.time}>
            {this.props.time}
          </Text>
          <Text style={Style.date}>
            {this.props.date}
          </Text>
        </View>
    );
  }

}

let Style = StyleSheet.create({

  container: {
    alignItems: 'center',
  },

  time: {
    fontSize: 124,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: '#333',
  },

  date: {
    fontSize: 24,
    fontFamily: 'roboto',
    color: '#333',
  },

});

export default Clock;
