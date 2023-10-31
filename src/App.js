import logo from './logo.svg';
import React from 'react';
import './App.css';
import { increment, decrement } from './Actions';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Test1 from './components/Test1';
import Counter1 from './hooks/Counter1';


export const TestContext1 = React.createContext()

function App() {
  const counter = useSelector(state=> state.counter )
  const isLogged = useSelector(state=> state.isLogged)
  const dispatch = useDispatch()

const [value, setValue] = React.useState(1)

  return (
    <div className="App">
hello world
<h1>counter {counter}</h1>
<button onClick={()=> {
  dispatch(increment(6))
  setValue(()=> value+1)
}}>+</button>
<button onClick={()=> dispatch(decrement())}>-</button>

{isLogged?<h3>valuable information i  shouldnt see</h3>:''}
<TestContext1.Provider value={value}>
<Test1/>
</TestContext1.Provider>
<Counter1/>
    </div>
  );
}

export default App;
 