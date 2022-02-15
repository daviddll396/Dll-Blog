import { Link } from "react-router-dom";

import React from 'react'

function edit({blogs,title}) {
  return (
    <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                
                <div className="blog-preview" key = {blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                   <h2>{blog.title}</h2>
                    <p>Edited by By {blog.author}</p> 
                </Link>
                    
                    
                </div>

            ))}
        </div>

  )
}

export default edit