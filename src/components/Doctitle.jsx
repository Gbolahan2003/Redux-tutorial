import React, {useState,  useEffect} from 'react'

function Doctitle() {
     const [count, setCount]= useState(0)
     useEffect(()=>{
document.title =`count ${count}`
     }, [count])

  return (
    <div>Doctitle
        <button onClick={()=> setCount(count +1)}>
             ...  click {count}

        </button>
    </div>
  )
}

export default Doctitle