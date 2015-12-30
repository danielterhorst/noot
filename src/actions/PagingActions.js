'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import PagingConstants from '../constants/PagingConstants';

let ActionTypes = PagingConstants.ActionTypes;

let PagingActions = {

  setIndex(index) {
    AppDispatcher.dispatch({
      type: ActionTypes.SET_INDEX,
      index,
    });
  },

};

export default PagingActions;
