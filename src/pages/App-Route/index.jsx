import React from 'react'
import Home from '../Home'
import NotFound from '../404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppRoute =()=>{
    return(
      <React.Fragment>
        <Router> 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact component={NotFound}/>
            </Switch>
        </Router>
    </React.Fragment>
    )
}

export default AppRoute;