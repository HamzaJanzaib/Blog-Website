import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './component/Header'
import Routing from './component/Routing'
import Footer from './component/Footer'



function App() {
  return (
    <Router>
      <div>
        {
           window.location.pathname === '/login' || window.location.pathname === '/signup' ? null : <Header />
        }
        <Routing />
        {
          window.location.pathname === '/login' || window.location.pathname === '/signup' ? null : <Footer />
        }
      </div>
    </Router>
  )
}

export default App 