import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';


const serversReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVER:
      nextState[action.server.id] = action.server;
      return nextState;
    case RECEIVE_SERVERS:
      return Object.assign({}, action.servers, state);
    case REMOVE_SERVER:
      delete nextState[action.serverId];
      return nextState;
    default:
      return state;
  }
}

export default serversReducer;