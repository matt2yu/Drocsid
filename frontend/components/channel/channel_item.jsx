import React from 'react';
import ServerContainer from '../server/server_container';
import { Link } from 'react-router-dom';


import ChatRoom from '../message/chat_room';
// import ChannelMemberList from './channel_member_list';


class ChannelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: null
    })
  }

  componentDidMount() {
    const id = this.props.match.params.channelId;
    this.setState({ id: id });
  }


  channelNames() {
    let channelNames;
    let serverId = this.props.serverId;
      let channels = Object.values(this.props.channels);
      channelNames = channels.map((channel,i) => (
        <li key={i}>
          <Link to={`/servers/${serverId}/channels/${channel.id}`}>
            {channel.name}
          </Link>
        </li>
      ));
    }


  render() {
    let serverId = this.state.id;
    return ( 
      <div className='channel-item'> 
        <div className='server-navbar'> 
          <ServerContainer />
          <div className='chat-room'>
            <ChatRoom channelId={this.props.match.params.channelId} currentUserId={this.props.currentUserId} />
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelItem;
