import React from 'react';
import ServerContainer from '../server/server_container'
import ServerItem from '../server/server_item'


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
    return ( 
      <div> 
        <ServerContainer />
        <br />
        <br />
        <h1>Eventually messages, server container, and member list side bar container will all be in each channel </h1>
      </div>
    )
  }
}

export default ChannelItem;