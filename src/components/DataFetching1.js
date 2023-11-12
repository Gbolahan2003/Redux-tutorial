import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching1() {
    const [loading, setLoading] =useState(true)
    const [Error, setError]=useState('')
    const[post, setPost] = useState([])


    useEffect(()=>{
         axios.get('https://jsonplaceholder.org/posts/1').then((response)=>{
            setLoading(false)
            setPost(response.data)
            setError('')
         }
         ).catch((Error)=>{
            setLoading(false)
            setPost('') 
            setError('something went wrong')
         }
        
         )
            },[])
  return (
    <div>
        {loading?'loading':post.title}
        {Error?'error':null}
    </div>
  )
}

export default DataFetching1