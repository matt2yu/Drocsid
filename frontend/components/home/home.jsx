import React from 'react';

import ServerNavBarContainer from '../server/server_navbar/server_nav_bar_container';


const Home = ({ currentUser }) => (
  <div className=''>
    <div className=''>
      <h1>Welcome to Drocsid, {currentUser.username}</h1>
      <br />
      <h2>
        The home page is currently under construction.
      </h2>
        <br />
        <h2>Server Nav Bar to show on left here </h2> 
        <ServerNavBarContainer />
        <br />
        <h2>Server buttons to show within nav bar  </h2> 
      <br /><br />
      <img className=''/>
    </div>

  </div>

);

export default Home;