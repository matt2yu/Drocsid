import React from 'react';

import ServerNavBarContainer from '../server/server_navbar/server_nav_bar_container';

class Home extends React.Component { 
  constructor(props) {
    super(props)
}


render () {
  const {currentUser} = this.props;


  return (<div className=''>
    {/* <ServerNavBarContainer /> */}
    <div className=''>
      <h1>Welcome {currentUser.username}!</h1>
      <br />
      <h2>
        Home page will show servers
        <br />
        test 
      </h2>
    </div>
  </div>
)}
}

export default Home;