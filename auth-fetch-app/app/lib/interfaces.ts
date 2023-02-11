import {createActionTypes} from './utils'

export const AUTH = createActionTypes('AUTH')
export const USER = createActionTypes('USER')
export const PRODUCT = createActionTypes('PRODUCT')

export interface IProduct {
  name: string
  color: string
  size: string
  price: number
  amount: number
}

export interface ILoginData {
  email: string
  password: string
}

export interface IRegisterData {
  username: string
  email: string
  password: string
}

export enum REQUEST {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CLEAR = 'CLEAR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export interface IRequestType {
  REQUEST?: string
  SUCCESS?: string
  FAILURE?: string
  CLEAR?: string
  CLEAR_ERROR?: string
}

/** payload interface */
export interface IAuthPayload {
  userId?: string | undefined
  token?: string | undefined
  error?: string | undefined
}

export interface IUserPayload {
  username?: string | undefined
  email?: string | undefined
  error?: string | undefined
}

export interface IProductsPayload {
  products?: IProduct[]
  error?: string | undefined
}

/** state interface */
export interface IAuthState {
  token: string | undefined
  authenticated: boolean
  fetching: boolean
  error: string | undefined
}

export interface IUserState {
  username: string | undefined
  email: string | undefined
  fetching: boolean
  error: string | undefined
}

export interface IProductsState {
  products: IProduct[]
  fetching: boolean
  error: string | undefined
}

/** action interface */
export interface IAuthAction {
  type: string
  payload?: IAuthPayload
}

export interface IUserAction {
  type: string
  payload?: IUserPayload
}

export interface IProductsAction {
  type: string
  payload?: IProductsPayload
}
