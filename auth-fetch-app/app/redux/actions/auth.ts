import {AppDispatch} from '../store'
import {AUTH, ILoginData, IRegisterData} from './../../lib/interfaces'
import {getData, storeData, removeData} from '../../lib/storage'
import {CreateAxios} from '../../lib/utils'

export const login = (data: ILoginData) => async (dispatch: AppDispatch) => {
  dispatch({type: AUTH.REQUEST})
  return CreateAxios()
    .then((axios: any) => {
      axios
        .post('/auth/login', data)
        .then(async (res: any) => {
          dispatch({
            type: AUTH.SUCCESS,
            payload: {token: res.data.data},
          })
          await storeData('token', res.data.data)
        })
        .catch((e: any) => {
          dispatch({
            type: AUTH.FAILURE,
            payload: {error: 'Wrong email address or password.'},
          })
          console.error(e)
        })
    })
    .catch(err => {
      dispatch({
        type: AUTH.FAILURE,
        payload: {error: 'Request Error. Please try again.'},
      })
      console.error(err)
    })
}

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch({type: AUTH.REQUEST})
  await removeData('token')
  dispatch({type: AUTH.CLEAR})
}

export const register =
  (data: IRegisterData) => async (dispatch: AppDispatch) => {
    dispatch({type: AUTH.REQUEST})
    return CreateAxios()
      .then((axios: any) => {
        axios
          .post('/auth/register', data)
          .then(async (res: any) => {
            dispatch({
              type: AUTH.SUCCESS,
              payload: {token: res.data.data},
            })
            await storeData('token', res.data.data)
          })
          .catch((e: any) => {
            dispatch({
              type: AUTH.FAILURE,
              payload: {error: 'Something went wrong! Please try again.'},
            })
            console.error(e)
          })
      })
      .catch(err => {
        dispatch({
          type: AUTH.FAILURE,
          payload: {error: 'Request Error. Please try again.'},
        })
        console.error(err)
      })
  }

export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch({type: AUTH.REQUEST})
  const token = await getData('token')
  if (token === null || token === undefined)
    return dispatch({type: AUTH.FAILURE})
  else return dispatch({type: AUTH.SUCCESS, payload: {token: token}})
}
