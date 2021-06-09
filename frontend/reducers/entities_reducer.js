import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';
import channels from './channels_reducer';

const entitiesReducer = combineReducers({
  users,
  servers,
  channels
});

export default entitiesReducer;