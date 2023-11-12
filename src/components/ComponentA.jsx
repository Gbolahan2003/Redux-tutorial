import React from 'react'
import ComponentD from './ComponentD'
import {countContext1} from '../App'


const ComponentA = () => {
    const countContext = React.useContext(countContext1)
  return (
    <div>
 ComponentA  {countContext.countState}
 <button onClick={()=> countContext.countDispatch('increment')}> Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentA