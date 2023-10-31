import React from 'react'
import { TestContext1 } from '../App'
const Test2 = () => {
const user =React.useContext(TestContext1)
  return (
<div className=""> Test one {user}</div>
  )
}

export default Test2