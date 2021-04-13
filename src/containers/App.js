import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import CreateListContainer from './list';
const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/list" component={CreateListContainer} />
    </Switch>
  </div>
)

export default App
