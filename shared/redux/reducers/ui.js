import { Map } from 'sb-immutable'
import cookie from 'react-cookie'


export const initialState = Map({
  locale: cookie.load('locale') || 'en',
  isRequestLoaderVisible: false,
})

export const setRequestLoaderVisibility = (state, payload) =>
  state.set('isRequestLoaderVisible', payload)

export const setLocale = (state, payload) =>
  state.set('locale', payload)

export const setHeaderActiveDropMenuName = (state, payload /* name */) =>
  state.set('headerActiveDropMenuName', payload)
