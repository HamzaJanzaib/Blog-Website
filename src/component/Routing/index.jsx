import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '../layout/Blog'
import About from '../layout/About'
import Contact from '../layout/Contact'
import Home from '../layout/Home'
import ErrorPage from '../layout/404'
import Singleblog from '../layout/Singleblog'
import SignUp from '../FireBase/SignUp'
import Login from '../FireBase/Login'
import Profile from '../layout/Profile'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<Singleblog />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Routing
