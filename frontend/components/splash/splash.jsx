
import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser} = this.props;

    const LogButton = currentUser ? (
      <div className='login-container'>
        <button className='log-button' onClick={() => this.props.logout()}>Logout</button>
        <img className='discord-logo' src="https://i.imgur.com/QtbNih0.png"/>
      </div>
    ) : (
      <div className='login-container'>
        <Link className='log-button' to="/login">Login</Link>
        <img className='discord-logo' src="https://i.imgur.com/QtbNih0.png"/>
      </div>
    )

    const SplashButtons = currentUser ? (
      <>
        <Link className='splash-home'to="/home">Enter Drocsid</Link>
      </>
    ) : (
      <div className='splash-button-container'>
        <Link className='splash-login' to="/login">Login</Link>
        <Link className='splash-signup' to="/signup">Sign up</Link>
      </div>
    )

    return(
      <div>

        <div 
          className='splash'>

          <div className='nav-container'>
            <nav className='nav-bar'>
              <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Download</a>
              <a href="https://drocsid-clone.herokuapp.com/#/" target="_blank">Why Drocsid?</a>
              <a href="https://github.com/matt2yu" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a>
            </nav>
            {LogButton}
          </div>

          <div className='splash-content'>
            <h1 className='header'>Imagine a place...</h1>
            <p className='splash-text'>...where you can belong to a school club, a gaming group, 
            or a worldwide art community. Where just you and a handful of friends can spend time 
            together. A place that makes it easy to talk every day and hang out more often.
            </p>
            {SplashButtons}
          </div>
        </div>

      </div>

    )
  }
}

export default Splash