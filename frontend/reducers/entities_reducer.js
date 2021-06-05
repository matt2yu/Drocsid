import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';
import userServers from './users_servers_reducer';

const entitiesReducer = combineReducers({
  users,
  servers,
  userServers
});

export default entitiesReducer;