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
              <h2>Guest Demo Login</h2>
              <button onClick={this.demoUser}>demo</button>
            </div>
          )
        }
      }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Drocsid!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            {this.showEmailForSignUp()}
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            {this.insertDemoUser()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
