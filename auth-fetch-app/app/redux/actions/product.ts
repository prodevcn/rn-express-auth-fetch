import {AppDispatch} from '../store'
import {PRODUCT} from '../../lib/interfaces'
import {CreateAxios} from '../../lib/utils'

export const fetchProducts = (ctx: string) => async (dispatch: AppDispatch) => {
  dispatch({type: PRODUCT.REQUEST})
  return CreateAxios()
    .then((axios: any) => {
      axios
        .get('/data/fetch', {params: {search: ctx}})
        .then(async (res: any) => {
          dispatch({
            type: PRODUCT.SUCCESS,
            payload: {
              products: res.data.data,
            },
          })
        })
        .catch((e: any) => {
          dispatch({
            type: PRODUCT.FAILURE,
            payload: {error: 'Product fetching failed!'},
          })
          console.log(e)
        })
    })
    .catch(err => {
      dispatch({
        type: PRODUCT.FAILURE,
        payload: {error: 'Request Error. Please try again.'},
      })
      console.error(err)
    })
}
