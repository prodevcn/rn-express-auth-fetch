import {IUserState, IUserAction, USER} from '../../lib/interfaces'

const INITIAL_STATE: IUserState = {
  fetching: false,
  username: undefined,
  email: undefined,
  error: undefined,
}

const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: IUserAction,
) => {
  switch (action.type) {
    case USER.REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case USER.SUCCESS:
      return {
        ...state,
        fetching: false,
        username: action.payload?.username,
        email: action.payload?.email,
        error: undefined,
      }
    case USER.FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload?.error,
      }
    case USER.CLEAR:
      return {
        ...state,
        fetching: false,
        email: undefined,
        error: undefined,
        username: undefined,
      }
    case USER.CLEAR_ERROR:
      return {
        ...state,
        fetching: false,
        error: undefined,
      }
    default:
      return state
  }
}

export default userReducer
