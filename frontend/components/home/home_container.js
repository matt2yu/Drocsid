import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect(
  mapStateToProps,
  null
)(Home);
