import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Charts from './pages/charts'
import Player from './components/player'
import ScrollToTop from './hooks/scrollToTop'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="player">
          <Player />
        </div>
        <ScrollToTop />
        <Switch>
          <Route exact path="/Charts">
            <Charts> </Charts>
          </Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}



export default App
