import {useState, useEffect} from 'react'
import BlogDetails from './BlogDetails';
import edit from "./edit"
import BlogList from './BlogList';
import useFetch from './useFetch';



const Home = () => {
    const{data :blogs,isPending,error} = useFetch('https://my-json-server.typicode.com/daviddll396/dll-blog-db/blogs')



   
    return ( 

        <div className="home">
        {error && <div>{error}</div>}
          {isPending && <div className="loading">Loading...</div>} 
             {blogs && <BlogList blogs = {blogs} title = 'All Articles' />}
             {blogs && <edit blogs = {blogs} title = 'All Articles' />}

            
            
        </div>
     );
} 
 
export default Home;


