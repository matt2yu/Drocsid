import React from 'react';

import ServerContainer from '../server/server_container';


const Home = ({ currentUser }) => (
  <div className='home-container'>
    <div className='server-content'>
    <ServerContainer />
    </div>
    <div className='home-content'>
      <h1>Welcome to Drocsid, {currentUser.username}</h1>
      <br />
      <div className='home-text'>
      <h2>
        The home page is currently under construction
      </h2>
        <br />
        <h2>Server Nav bar on left missing: add server, explore servers  </h2> 
        
        <br />
        <h2>Direct Messages and direct message member list will appear on right  </h2> 
        </div>
      <br /><br />
      <img 
      className='builder-gif'
      src="https://i.imgur.com/8bcOBog.gif"
      alt="new"
      />
      <img className=''/>
    </div>
  
  </div>

);

export default Home;