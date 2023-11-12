import React from 'react'
import ComponentD from './ComponentD'
import {countContext1} from '../App'


const ComponentF= () => {
    const countContext = React.useContext(countContext1)
  return (
    <div>
 ComponentF  {countContext.countState}
 <button onClick={()=> countContext.countDispatch('increment')}> Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentF