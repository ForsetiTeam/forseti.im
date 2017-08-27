import request from 'sb-request'
import { reducers } from 'redux/core'


export const fetch = () =>
  request.get('rest/user/profile')
    .then((result) => {
      reducers.auth.update({ isLoggedIn: true })
      reducers.me.update(result)
    })
