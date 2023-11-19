import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterOne = () => {
    const number = 7 

const [count, increment, decrement, reset] = useCounter(number)
  return (
    <div>CounterOne -{count}
        <button onClick={()=> decrement()}>decrement</button>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=> reset()}>reset</button>
    </div>
  )
}

export default CounterOne