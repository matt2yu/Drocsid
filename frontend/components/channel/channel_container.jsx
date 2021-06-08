import { connect } from 'react-redux';
import { fetchChannels} from '../../actions/channel_actions';
import Channel from './channel';

const mSTP = ( {session, entities: { users, servers, channels }} ) => ({
  currentUser: users[session.id],
  servers,
  channels
})

export default connect(mSTP, { fetchChannels })(Channel)