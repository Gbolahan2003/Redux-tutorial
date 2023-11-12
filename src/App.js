
import React, {useReducer} from 'react';
import './App.css';
import { increment, decrement } from './Actions';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Test1 from './components/Test1';
import Counter1 from './hooks/Counter1';
import Counter2 from './hooks/Counter2';
import Counter3 from './hooks/Counter3';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';


export const TestContext1 = React.createContext()
export const countContext1 = React.createContext()
function App() {
  const counter = useSelector(state=> state.counter )
  const isLogged = useSelector(state=> state.isLogged)
  // const dispatch = useDispatch()

const [value, setValue] = React.useState(1)


const initialState =0
const reducer =(state, action)=>{
switch(action){
  case 'increment':
    return state +1
    case 'decrement':
      return state-1
      case 'reset':
        return initialState
        default:return state
}

}
const [count, dispatch] = useReducer(reducer, initialState)


  return (
  <countContext1.Provider value={{countState:count, countDispatch:dispatch}}>
      <div className="App">
    <h1>count {count}</h1>
{/* hello world
<h1>counter {counter}</h1>
<button onClick={()=> {
  dispatch(crement(6))
  setValue(()=> value+1)
}}>+</button>
<button onClick={()=> dispatch(decrement())}>-</button>

{isLogged?<h3>valuable information i  shouldnt see</h3>:''} */}
{/* <TestContext1.Provider value={value}>
<Test1/>
</TestContext1.Provider>
{/* <Counter1/> */}
{/* <Counter2/> */}
{/* <Counter3/>  */}
{/* <ComponentA/>
<ComponentB/>
<ComponentC/> */}
<DataFetching1/>
<DataFetching2/>
    </div>
  </countContext1.Provider>
  );
}

export default App;
 