'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import PagingConstants from '../constants/PagingConstants';
import Flux from 'flux/utils';

const {Store} = Flux;
const ActionTypes = PagingConstants.ActionTypes;

let index = null;

console.log('test');

class PagingStore extends Store {

  getIndex() {
    return index;
  }

  __onDispatch(action) {

    console.log(action.actionType, action);

    switch (action.actionType) {
    case ActionTypes.SET_INDEX:
      index = action.index;
      this.__emitChange();
      break;

    default:
      // no-op
      break;
    }

  }

}

export default new PagingStore(AppDispatcher);
