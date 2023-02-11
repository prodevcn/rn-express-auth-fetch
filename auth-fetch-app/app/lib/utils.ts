import client from 'axios'
import {API_URL} from './constants'
import {getData} from './storage'
import {IRequestType} from './interfaces'

const getAuthorizationHeader = () =>
  new Promise(async resolve => {
    const token = await getData('token')
    if (token) {
      resolve('Bearer ' + token)
    } else {
      resolve(null)
    }
  })

export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  username: /^(?=.*?[A-Z])(?=.*?[a-z]).{3,}$/,
}

export const formValidation = (type: string, data: string) => {
  switch (type) {
    case 'email':
      return validationPatterns.email.test(data)
    case 'password':
      return validationPatterns.password.test(data)
    case 'username':
      return validationPatterns.username.test(data)
  }
}

export const generatePlaceholder = (type: string) => {
  switch (type) {
    case 'email':
      return 'Email'
    case 'password':
      return 'Password'
    case 'username':
      return 'Username'
    case 'confirm-password':
      return 'Confirm password'
    default:
      return 'Placeholder'
  }
}

export const CreateAxios = () =>
  new Promise(resolve => {
    getAuthorizationHeader().then(async (authHeader: any) => {
      const axios = client.create({
        baseURL: API_URL,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        // timeout: 1000 * 5,
      })

      axios.interceptors.request.use(
        config => {
          if (authHeader) {
            config.headers.Authorization = authHeader
          }
          return config
        },
        error => {
          throw {boundaryId: 'FETCH_REQUEST', details: error}
        },
      )
      resolve(axios)
    })
  })

export const createActionTypes = (base: string) => {
  const actionType: string[] = [
    'REQUEST',
    'SUCCESS',
    'FAILURE',
    'CLEAR',
    'CLEAR_ERROR',
  ]
  const requestType: IRequestType = {}
  actionType.forEach((type: string) => {
    requestType[type as keyof IRequestType] = `${base}_${type}`
  })
  return requestType
}
