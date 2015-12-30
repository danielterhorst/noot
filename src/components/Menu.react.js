'use strict';

import React from 'react-native';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PagingActions from '../actions/PagingActions';
import PagingStore from '../stores/PagingStore';
import PagingConstants from '../constants/PagingConstants';

const ActionTypes = PagingConstants.ActionTypes;
const {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} = React;


class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.setState({
      index: 0
    });
  }

  componentDidMount() {
    PagingStore.addListener(this.onChange);
  }

  onPress = () => {
    PagingActions.setIndex(this.props.index);
  }

  onChange = () => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.SET_INDEX,
      index: this.state.index
    });
  }

  isActive = () => this.props.index == PagingStore.getIndex();

  getStyle() {
    let activeIndex = PagingStore.getIndex();

    return [
      Style.button,
      this.isActive() && {
        backgroundColor: '#FFF',
        borderTopColor: 'transparent',
        borderLeftColor: '#DDD',
        borderRightColor: '#DDD',
        borderBottomColor: '#DDD',
      },
      this.props.index < activeIndex - 1 && {
        borderRightColor: '#FFF',
      },
      this.props.index > activeIndex + 1 && {
        borderLeftColor: '#FFF',
      },
    ];
  }

  getIconStyle() {
    return [
      Style.button_icon,
      {width: this.props.width},
      this.isActive() && {
        color: '#4ABA74',
      },
    ];
  }

  getTextSTyle() {
    return [
      Style.text,
      this.isActive() && {
        color: '#4ABA74',
      },
    ];
  }

  render() {

    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.onPress}
        >
          <View style={this.getStyle()}>
            <Text style={this.getTextSTyle()}>{this.props.label}</Text>
          </View>
        </TouchableNativeFeedback>
    );

  }

}

MenuItem.propTypes = {
  icon: React.PropTypes.string,
  index: React.PropTypes.number,
  label: React.PropTypes.string,
  width: React.PropTypes.number,
};

MenuItem.defaultProps = {
  icon: 'questionmark',
  width: 50,
  label: 'Unknown',
};


export default class Menu extends React.Component {

  propTypes = {
    items: React.PropTypes.shape({
      component: React.PropTypes.element,
      icon: React.PropTypes.string,
      width: React.PropTypes.number,
      label: React.PropTypes.string,
      map: React.PropTypes.node,
    }),
  };

  constructor(props) {
    super(props);

    this.props = {
      items: {}
    };
  }

  render() {
    return  (
      <View style={Style.menu}>
        {this.props.items.map(function (item, index) {
          return (
            <MenuItem
                {...item}
                index={index}
                key={index}
            />
          );
        })}
      </View>
    );

  }

}

const Style = StyleSheet.create({

  menu: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingBottom: 2,

    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: '#DDD',
  },

  button: {
    position: 'relative',
    top: -3,
    width: 175,
    paddingTop: 25,
    paddingBottom: 20,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },

  button_icon: {
    flex: 0.7,
    color: '#CCC',
  },

  button_text: {
    flex: 0.3,
    textAlign: 'center',
    color: '#CCC',
  },

});
