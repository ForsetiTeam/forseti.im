import { reducers } from 'redux/core'
import { getState } from 'helpers'
import cookie from 'react-cookie'


const showRequestLoader = () => reducers.ui.setRequestLoaderVisibility(true)
const hideRequestLoader = () => reducers.ui.setRequestLoaderVisibility(false)

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
  showRequestLoader,
  hideRequestLoader,
  setLocale,
  toggleHeaderDropMenuVisibility,
}
