import React from 'react';

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
    let channelId = this.state.id;
    return ( 
      <div> 
        <h1>Eventually messages, server container, and member list side bar container will all be in each channel </h1>
      </div>
    )
  }
}

export default ChannelItem;