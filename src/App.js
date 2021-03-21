// import logo from './valetingClubLogo.PNG';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import NavBar from './components/Nav'
import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
function App () {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
      <div className="container" id="page-wrap">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </div>
  )
}

export default App
