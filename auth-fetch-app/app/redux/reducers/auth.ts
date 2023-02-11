import {IAuthState, IAuthAction, AUTH} from '../../lib/interfaces'

const INITIAL_STATE: IAuthState = {
  fetching: false,
  authenticated: false,
  token: undefined,
  error: undefined,
}

const authReducer = (
  state: IAuthState = INITIAL_STATE,
  action: IAuthAction,
) => {
  switch (action.type) {
    case AUTH.REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case AUTH.SUCCESS:
      return {
        ...state,
        fetching: false,
        token: action.payload?.token,
        authenticated: true,
        error: undefined,
      }
    case AUTH.FAILURE:
      return {
        ...state,
        fetching: false,
        authenticated: false,
        error: action.payload?.error,
      }
    case AUTH.CLEAR:
      return {
        ...state,
        fetching: false,
        authenticated: false,
        token: undefined,
        error: undefined,
      }
    case AUTH.CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      }
    default:
      return state
  }
}

export default authReducer
