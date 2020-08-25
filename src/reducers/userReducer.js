import {
  CHECKING_SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGGING_IN,
} from '../actions/actions';

export const defaultState = {
  user: null,
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECKING_SIGNUP:
      return {
        ...state,
        isSigning: true,
        signupErrors: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigning: false,
        user: action.user,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isSigning: false,
        signupErrors: action.errors,
      };
    case LOGGING_IN:
      return {
        ...state,
        isLogginIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
