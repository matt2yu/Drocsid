import { connect } from 'react-redux';

import ChannelItem from './channel_item';

const mSTP = ( {session}) => ({
  currentUserId: session.id
})

export default connect(mSTP, null)(ChannelItem)