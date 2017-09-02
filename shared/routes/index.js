import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { links } from 'helpers'


// Containers ------------------------------------------------------------------ /

import App from 'containers/App/App'
import HasAuth from 'containers/HasAuth/HasAuth'

// Layouts --------------------------------------------------------------------- /

import InsideLayout from 'layouts/InsideLayout/InsideLayout'

// Pages ----------------------------------------------------------------------- /

import HomePage from 'pages/HomePage/HomePage'
import AboutTeamPage from 'pages/AboutTeamPage/AboutTeamPage'


const routes = (
  <Route component={App}>
    <Route path="/" component={HomePage} />

    <Route component={InsideLayout}>
      <Route {...links.routes.aboutTeam} component={AboutTeamPage} />
    </Route>
    <Route component={HasAuth}>

    </Route>

  </Route>
)

export default routes
