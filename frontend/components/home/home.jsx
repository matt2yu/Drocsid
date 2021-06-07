import React from 'react';

import ServerContainer from '../server/server_container';


const Home = ({ currentUser }) => (
  <div className='home'>
    <div className=''>
      <h1>Welcome to Drocsid, {currentUser.username}</h1>
      <br />
      <h2>
        The home page is currently under construction.
      </h2>
        <br />
        <h2>Server Nav Bar to show on left here </h2> 
        <ServerContainer />
        <br />
        <h2>Server buttons to show within nav bar  </h2> 
      <br /><br />
      <img className=''/>
    </div>

  </div>

);

export default Home;