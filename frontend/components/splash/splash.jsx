import React from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from '../home/home_container';


const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <div className='splash'>
        <nav className='nav-bar'>
          <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Download</a>
          <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Why Drocsid?</a>
          <a href="https://github.com/matt2yu" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a>
        </nav>

        <div className='login-container'>
          <Link className='log-button' to="/login">Open Discord</Link>
          <img className='discord-logo' src="https://i.imgur.com/QtbNih0.png"/>
        </div>
      
      <div className='splash-content'>
        <h1 className='header'>Imagine a place...</h1>
        <p className='splash-text'>...where you can belong to a school club, a gaming group, 
        or a worldwide art community. Where just you and a handful of friends can spend time 
        together. A place that makes it easy to talk every day and hang out more often.</p>
      </div>

      <br />

        <div className='splash-button-container'>
          <Link className='splash-login' to="/login">Login</Link>
          <Link className='splash-signup' to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );

  const personalSplash = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>

      {/* <div><HomeContainer /></div> */}
    </hgroup>
    
  );

  return currentUser ? personalSplash() : sessionLinks();
};


export default Splash;
