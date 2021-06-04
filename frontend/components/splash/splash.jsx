import React from 'react';
import { Link } from 'react-router-dom';


const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      {/* <div className='splash' style={{backgroundImage: `url(${splash_bg})`}}> */}
      <div className='splash'>
        <nav className='nav-bar'>
          <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Download</a>
          <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Why Drocsid?</a>
          <a href="https://github.com/matt2yu" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a>
        </nav>

        <div className='login-container'>
          <Link className='log-button' to="/login">Open Discord</Link>
          <img className='discord-logo' src="https://i.imgur.com/ZNMyD61.png"/>
        </div>
      
      <div className='splash-content'>
        <h1 className='header'>Your place to talk</h1>
        <p className='splash-text'>Whether you’re part of a school club, gaming group, worldwide art community, or just a 
          handful of friends that want to spend time together, Drocsid makes it easy to talk every 
          day and hang out more often.</p>
      </div>

      <br />

        <div className='splash-button-container'>
          <Link className='splash-login' to="/login">Login</Link>
          <Link className='splash-signup' to="/signup">Sign up!</Link>
        </div>
      </div>
    </div>
  );

  const personalSplash = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalSplash() : sessionLinks();
};


export default Splash;
