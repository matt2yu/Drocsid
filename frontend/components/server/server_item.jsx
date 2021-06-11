import React from 'react';
import ChannelContainer from '../channel/channel_container';
import ServerContainer from './server_container';
import ChatRoom from '../message/chat_room';


class ServerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: null
    })
  }

  componentDidMount() {
    const id = this.props.match.params.serverId;
    this.setState({ id: id });
  }

  render() {
    let serverId = this.state.id;
    return ( 
      <div className='server-item'> 
        <div className='server-container'>
          <ServerContainer />
        </div>
        <div className='chat-room'>
          <ChatRoom channelId={this.props.match.params.channelId} currentUserId={this.props.currentUserId} />
        </div>
        <div className='channel-container'>
          <ChannelContainer serverId={serverId} />
        </div>
      </div>
    )
  }
}

export default ServerItem;