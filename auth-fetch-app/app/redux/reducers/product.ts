import {IProductsState, IProductsAction, PRODUCT} from '../../lib/interfaces'

const INITIAL_STATE: IProductsState = {
  products: [],
  fetching: false,
  error: undefined,
}

const productReducer = (
  state: IProductsState = INITIAL_STATE,
  action: IProductsAction,
) => {
  switch (action.type) {
    case PRODUCT.REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case PRODUCT.SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.payload?.products,
        error: undefined,
      }
    case PRODUCT.FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload?.error,
      }
    case PRODUCT.CLEAR:
      return {
        ...state,
        products: [],
        error: undefined,
        fetching: false,
      }
    case PRODUCT.CLEAR_ERROR:
      return {
        ...state,
        fetching: false,
        error: undefined,
      }
    default:
      return state
  }
}

export default productReducer
