import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveMessage, receiveChannelMessages } from '../../actions/message_actions';
import { getChannelMessages } from '../../util/message_api_util'

import ChatRoom from './chat_room';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    chatType: "Channel",
    chat: state.entities.channels[ownProps.match.params.channelId],
    currentServerId: ownProps.match.params.serverId,
    users: state.entities.users,
    currentUser: state.entities.currentUser[state.session.session.id],
    messages: getChannelMessages(state, ownProps.match.params.channelId)
  })
}

const mDTP = dispatch => {
  return({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveChannelMessages: messages => dispatch(receiveChannelMessages(messages)),
  })
}

export default withRouter(connect(mSTP, mDTP)(ChatRoom));