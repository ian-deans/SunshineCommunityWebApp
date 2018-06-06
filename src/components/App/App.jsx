import React from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'

import {
  Home,
} from '../../components'

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/login" component={}/> */}
      {/* <Route exact path="/home" component={}/> */}
    </Switch>
  )
}

export default withRouter(App)

/**
 *  /            home page
 *  /login       login form / butons for google / facebook
 *  /profile        home profile for logged in user
 *  /user/:id    view of another user's profile
 *  /friends
 *  /conversations
 *  /conversations/:id
 */