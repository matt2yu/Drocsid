import React from 'react';
import ServerContainer from '../server/server_container';
// import ChannelContainer from '.channel_container';
import ChannelMemberList from './channel_member_list';


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

  render() {
    let serverId = this.state.id;
    return ( 
      <div className='channel-item'> 
        <ServerContainer />
        <br />
        {/* <ChannelContainer serverId={serverId} /> */}
        {/* <ChannelMemberList /> */}
        <br />
        <br />
        <h1>Eventually messages, server container, and member list side bar container will all be in each channel </h1>
      </div>
    )
  }
}

export default ChannelItem;