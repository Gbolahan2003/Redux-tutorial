import React from 'react'

function useCounter(number =0) {
    const   [count, setCount] = React.useState(number )
    const decrement =()=>{
     setCount(prevState => prevState - 1)
    }
    const increment =()=>{
     setCount(prevState => prevState + 1)
    }
    const reset =()=>{
     setCount(number)
    }
    return [count, increment, decrement, reset]
}

export default useCounter