import React from 'react';
import { Link } from 'react-router-dom';
import Channel from '../channel/channel';


class Server extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchServers()
      .then(() => this.setState({loading: false}));
    console.log(this.state);
  }

  render() {
    let serverNames;
    if (!this.props.loading) {
      let servers = Object.values(this.props.servers);
      serverNames = servers.map((server, i) => (
      <div>
        <br />
        <div className='list-item' key={i}>
          <Link to={`/servers/${server.id}`}>
            <img className='server-icons' src='https://i.imgur.com/xWHsRqm.png'></img>
            {server.name}
          </Link>
        </div>
        <br />
      </div>
      ));
    }


    return (
      <div className='server'>
        <Link to={`/home`}>
        <img className='server-icons' src='https://i.imgur.com/zqQmMbc.jpg'></img>
        </Link>
          {serverNames}
      </div>
    )
  }
}

export default Server;