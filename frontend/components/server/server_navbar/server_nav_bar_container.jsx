import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import { fetchServers } from '../../../actions/server_actions';
import ServerNavBar from './server_nav_bar';

const mSTP = ({ session, entities: { users, servers } }) => ({
  currentUser: users[session.id],
  servers
})

export default connect(mSTP, { logout, fetchServers})(ServerNavBar)