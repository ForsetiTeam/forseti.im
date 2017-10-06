import { Map } from 'sb-immutable'
import cookie from 'react-cookie'


export const initialState = Map({
  isLoaderVisible: false,
  locale: cookie.load('locale') || 'ru',
  headerActiveDropMenuName: null,
})

export const setLoaderVisibility = (state, payload) =>
  state.set('isLoaderVisible', payload)

export const setLocale = (state, payload) =>
  state.set('locale', payload)

export const setHeaderActiveDropMenuName = (state, payload /* name */) =>
  state.set('headerActiveDropMenuName', payload)
