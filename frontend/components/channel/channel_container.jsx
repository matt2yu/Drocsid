import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchChannels} from '../../actions/channel_actions';

import Channel from './channel';

const mSTP = ( {session, entities: { users, servers, channels }} ) => ({
  servers,
  channels
})

export default connect(mSTP, { fetchChannels, logout })(Channel)