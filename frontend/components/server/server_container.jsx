import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchServers } from '../../actions/server_actions';
import Server from './server';

const mSTP = ({ session, entities: { users, servers } }) => ({
  currentUser: users[session.id],
  servers
})

export default connect(mSTP, { logout, fetchServers})(Server)