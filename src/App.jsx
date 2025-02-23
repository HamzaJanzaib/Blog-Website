import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './component/Header'
import Routing from './component/Routing'
import Footer from './component/Footer'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routing />
        <Footer />
      </div>
    </Router>
  )
}

export default App 