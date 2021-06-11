import React from 'react';
import { Link } from 'react-router-dom';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentServerId: null
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.serverId !== this.props.serverId){
      this.props.fetchChannels(this.props.serverId)
        .then(() => this.setState({loading: false}));
    }
  }


  render () {
    let channelNames;
    let serverId = this.props.serverId;
    if (!this.state.loading) {
      let channels = Object.values(this.props.channels);
      channelNames = channels.map((channel,i) => (
        <li className='channel-items' key={i}>
          <Link to={`/servers/${serverId}/channels/${channel.id}`}>
            {channel.name}
            
          </Link>
        </li>
      ));
    }

    return (
      <div className='channel'>
          <img className='invite' src="https://i.imgur.com/h3v6rYu.png" alt="" />
        <span className='this-span'>
          <p>Text Channels</p>
          <br />
          <span className='channel-names'>{channelNames}</span>
        </span>
      </div>
    )
  }
}

export default Channel;