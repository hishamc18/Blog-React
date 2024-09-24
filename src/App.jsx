import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateBlog from './components/CreateBlog'
import BlogDetails from './components/BlogDetails'
import Blogs from './components/Blogs'
import { BlogProvider } from './context/BlogContext'
import './App.css'

function App() {
  return (
    <div>
      <BlogProvider>
        <Router>
          <Routes>
            <Route path='/' element={<CreateBlog />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blogs/:id' element={<BlogDetails />} />
          </Routes>
        </Router>
      </BlogProvider>
    </div>
  )
}

export default App
