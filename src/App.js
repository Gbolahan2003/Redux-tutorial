import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './Actions';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
function App() {
  const counter = useSelector(state=> state.counter )
  const isLogged = useSelector(state=> state.isLogged)
  const dispatch = useDispatch()
  let number = 6
  return (
    <div className="App">
hello world
<h1>counter {counter}</h1>
<button onClick={()=> dispatch(increment(6))}>+</button>
<button onClick={()=> dispatch(decrement())}>-</button>

{isLogged?<h3>valuable information i  shouldnt see</h3>:''}
    </div>
  );
}

export default App;
 