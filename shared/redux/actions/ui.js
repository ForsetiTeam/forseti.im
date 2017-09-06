import { reducers } from 'redux/core'
import { getState } from 'helpers'
import cookie from 'react-cookie'


const showLoader = () => reducers.ui.setLoaderVisibility(true)

const hideLoader = () => reducers.ui.setLoaderVisibility(false)

const setLocale = (locale) => {
  cookie.save('locale', locale)
  reducers.ui.setLocale(locale)
}

const toggleHeaderDropMenuVisibility = (dropMenuName) => {
  const { ui: { headerActiveDropMenuName } } = getState()
  const value = headerActiveDropMenuName === dropMenuName ? null : dropMenuName

  reducers.ui.setHeaderActiveDropMenuName(value)
}


export default {
  showLoader,
  hideLoader,
  setLocale,
  toggleHeaderDropMenuVisibility,
}
