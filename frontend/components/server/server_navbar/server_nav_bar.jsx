import React from 'react';
// import HomeButton from './HomeButton.jsx/HomeButton';
// import ServerNavBarItem from './server_nav_bar_item';
// import CreateServerButton from './create_server/CreateServerButton';
// import ExploreServersButton from './explore_servers/ExploreServersButton';

class ServerNavBar extends React.Component {
  constructor(props) {
    super(props)

  }
  
  componentDidMount() {
    this.props.fetchAllServers(this.props.currentUser.id);
  }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.userServersIds !== this.props.userServersIds) {
  //     this.props.fetchAllServers(this.props.currentUser.id);
  //   }
  // }

  render() {
    if ((!Object.keys(this.props.allServers).length) || 
    (!this.props.userServersIds.length)) {
      return null;
    }
    return(
      <div className='navbar'>
        {/* <HomeButton /> */}
        <hr />
        {/* {this.props.userServersIds.map(serverId => {
          return <ServerNavBarItem 
            key={serverId}
            server={this.props.allServers[serverId]} />
        })}  */}
        {/* <CreateServerButton openModal={this.props.openModal} /> */}
        {/* <ExploreServersButton openModal={this.props.openModal} /> */}

      </div>
    )
  }
}

export default ServerNavBar;