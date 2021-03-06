import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    message: 'Create your code account. It is free and only takes a minute.'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
