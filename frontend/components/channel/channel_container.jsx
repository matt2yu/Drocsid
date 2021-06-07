import { connect } from 'react-redux';
import { fetchChannels} from '../../actions/channel_actions';
import Channel from './channel';

const mSTP = ( { entities: { servers, channels }} ) => ({
  servers,
  channels
})

export default connect(mSTP, { fetchChannels })(Channel)