import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
// import { Navbar } from './components/Navbar'
import {Admin, Login, Register,Error, Home } from './pages'
const App = () => {
  return (
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/*'>
          <Error />
        </Route>
      </Switch>
  )
}

export default App
