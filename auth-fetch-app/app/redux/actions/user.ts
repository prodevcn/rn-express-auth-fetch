import {USER} from './../../lib/interfaces'
import {AppDispatch} from './../store'
import {CreateAxios} from '../../lib/utils'

export const fetchUser = () => async (dispatch: AppDispatch) => {
  dispatch({type: USER.REQUEST})
  return CreateAxios()
    .then((axios: any) => {
      axios
        .get('/data/fetch-user')
        .then(async (res: any) => {
          dispatch({
            type: USER.SUCCESS,
            payload: {
              username: res.data.data.username,
              email: res.data.data.email,
            },
          })
        })
        .catch((e: any) => {
          dispatch({
            type: USER.FAILURE,
            payload: {error: 'User fetching failed!'},
          })
          console.error(e)
        })
    })
    .catch(err => {
      dispatch({
        type: USER.FAILURE,
        payload: {error: 'Request Error. Please try again.'},
      })
      console.error(err)
    })
}
