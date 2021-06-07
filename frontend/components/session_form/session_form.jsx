import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showEmailForSignUp = this.showEmailForSignUp.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.insertDemoUser = this.insertDemoUser.bind(this);
  }


  ComponentDidMount() {
    this.props.clearErrors();
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push('/home')
    });
  }

  renderErrors() {
      if (this.props.errors !== undefined) 
    {return (
      <ul>
        {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
          ))}
      </ul>
      )}
  }

  showEmailForSignUp() {
    if (this.props.formType ==='signup') {
      return (<label>Email:
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className='login-input'
        />
      </label>)
    }
  }

  demoUser(e) {
    e.preventDefault();
      const demoAccount = ({
      email: 'demo@test.com',
      username: 'demouser',
      password: 'password'
    });
    this.props.processForm(demoAccount).then(() => this.props.history.push('/home'))
  }

  

      insertDemoUser () {
        if (this.props.formType === 'login') {
          return (
            <div className='demo-login'>
              <h2 className='title-text'>Log in with QR Code</h2>
              <p className='subtitle-text'>Scan this with the Drocsid mobile app to log in instantly.</p>
              <button className='demo-button' onClick={this.demoUser}></button>
            </div>
          )
        }
      }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className='title-text'>Welcome back!</h2>
          <br/>
          <p className='subtitle-text'>We're so excited to see you again!</p>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            {this.showEmailForSignUp()}
            <br/>
            <label>USERNAME
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>PASSWORD
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <p>Forgot your password?</p>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <p>Need an Account? {this.props.navLink}</p> 
            <br />
            {this.insertDemoUser()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
