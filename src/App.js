import logo from './images/logo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import NavBar from './components/Nav'
import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <div className="right">
        <NavBar />
      </div>
      <header className="App-header">
          <a href="/"><img src={logo} alt="COMPANY NAME" id="SiteLogo" className="ml-3" width="100px" /></a>
        </header>
      <Container className="pl-0 pr-0">
        <Router history={history}>
          <Routes />
        </Router>
      </Container>
      <Footer />
    </div>
  )
}

export default App
