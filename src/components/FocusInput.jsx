import React, { useReducer, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    React.useEffect(()=>{
inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type="text" />

    </div>
  )
}

export default FocusInput