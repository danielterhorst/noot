'use strict';

import React from 'react-native';
import PagingActions from '../actions/PagingActions';
import PagingStore from '../stores/PagingStore';
import Menu from './Menu.react';
import Dimensions from 'Dimensions';
import Home from './Home.react';
import Energy from './Energy.react';
import Heating from './Heating.react';
import Lighting from './Lighting.react';

const {
  View,
  ViewPagerAndroid,
  StyleSheet,
} = React;

const windowSize = Dimensions.get('window');

console.log('toet');

export default class ViewPager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      //progress: {
      //  position: 0,
      //  offset: 0,
      //},
    };
  }

  componentDidMount() {
    PagingStore.addListener(this.onChange);
  }

  static pages = [
    {
      component: Home,
      icon: 'home',
      width: 50,
      label: 'Home',
    },
    {
      component: Energy,
      icon: 'bolt',
      width: 25,
      label: 'Stroom',
    },
    {
      component: Heating,
      icon: 'fire',
      width: 50,
      label: 'Verwarming',
    },
    {
      component: Lighting,
      icon: 'lightbulb-o',
      width: 35,
      label: 'Licht',
    },
  ]

  //onChange() {
  //  this.viewPager.setPage(PagingStore.getIndex());
  //}

  onPageSelected = (e) => {
    //this.setState({page: e.nativeEvent.position});
    PagingActions.setIndex(e.nativeEvent.position);
  }

  render() {
    return (
        <View style={Style.container}>
          <ViewPagerAndroid
              initialPage={0}
              onPageSelected={this.onPageSelected}
              ref="viewPager"
              style={Style.content}
          >
            {ViewPager.pages.map(function (page, index) {
              return (
                  <View key={index}>
                    {React.createElement(page.component)}
                  </View>
              );
            }, this)}
          </ViewPagerAndroid>
          <View style={Style.menu}>
            <Menu items={ViewPager.pages} />
          </View>
        </View>
    );
  }

}

const Style = StyleSheet.create({

  container: {
    width: windowSize.width,
    height: windowSize.height,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFEFEF',
  },

  content: {
    flex: .8,
    backgroundColor: '#FFF',
  },

  menu: {
    flex: .2,
    flexDirection: 'row',
  },

});
