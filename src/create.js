import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {
    
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Tolani')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author}

        setIsPending(true)



        fetch('https://my-json-server.typicode.com/daviddll396/dll-blog-db/blogs',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(()=> {
        console.log('New Article Added')

        setIsPending(false)
        history.push('/')

        })

        
    
        }




    return ( 
        <div className="create">
            <h2>Add a new Article</h2>
            <form onSubmit = {handleSubmit}>
                <label> Article Title: </label>
                <input type="text" 
                required  
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label> Article Body: </label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                
                ></textarea>
                <label>Article Author:</label>
                <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Tolani">Tolani</option>
                    <option value="Tolu">Tolu</option>
                    <option value="Anonymous">Anonymous</option>
                </select>
                { !isPending && <button>Add Article</button>}
                { isPending && <button>Adding Article...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;