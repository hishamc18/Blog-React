import React, { useContext } from 'react'
import {BlogContext} from '../context/BlogContext'
import { Link } from 'react-router-dom'


function Blogs() {
    const { blogs } = useContext(BlogContext)
  return (
    <div className='blog-container'>
      <h2>All Blogs</h2>
      <ul>
        {
            blogs.map((blog)=>(
                <li key={blog.id}>
                    <Link className='Link' to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Blogs
