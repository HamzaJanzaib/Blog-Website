import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '../layout/Blog'
import About from '../layout/About'
import Contact from '../layout/Contact'
import Home from '../layout/Home'
import ErrorPage from '../layout/404'
import Singleblog from '../layout/Singleblog'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<Singleblog />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Routing
