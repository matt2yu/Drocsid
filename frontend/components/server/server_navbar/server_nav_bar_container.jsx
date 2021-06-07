import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAllServers, fetchServerMembers} from '../../../actions/server_actions';
import { openModal } from '../../../actions/ui_actions';
import ServerNavBar from './server_nav_bar';

const mSTP = (state, ownProps) => {
  let home;
  if (ownProps.match.path == "/home") home = true;
  return({
    home,
    currentUser: state.entities.currentUser[state.session.id],
    userServersIds: state.session.userServers,
    currServerId: ownProps.match.params.serverId,
    allServers: state.entities.servers
  })
}

const mDTP = dispatch => {
  debugger
  return ({
    fetchAllServers: (userId) => dispatch(fetchAllServers(userId)),
    fetchServerMembers: (serverId) => dispatch(fetchServerMembers(serverId)),
    // openModal: (modal) => dispatch(openModal(modal))
  })
}

export default withRouter(connect(mSTP, mDTP)(ServerNavBar));