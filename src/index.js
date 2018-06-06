import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch, Router} from 'react-router'
import createHistory from 'history/createBrowserHistory'

import {App} from './components'

ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
)