import React, {useState,  useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function Doctitle() {
     const [count, setCount]= useState(0)
useDocumentTitle(count)

  return (
    <div>Doctitle
        <button onClick={()=> setCount(count +1)}>
             ...  click {count}

        </button>
    </div>
  )
}

export default Doctitle