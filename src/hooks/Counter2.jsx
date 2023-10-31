import React, {useReducer} from 'react'

const Counter2 = () => {

const initialState ={
    firstCounter: 0,
    secondCounter: 5
}

const reducer =(state, action) =>{
    switch(action.type){
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
             
             case 'decrement':
              return {...state,  firstCounter : state.firstCounter - action.value}
            
             case 'incrementby':
              return {...state, 
                 secondCounter : state.secondCounter + action.value}
              
              case 'reset':
                return {...state, firstCounter:initialState.firstCounter}
              default:
                return state

    }
}
const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <p>Counter2 - {count.firstCounter}</p>
        <p>secondCounter2 - {count.secondCounter}</p>
        <button onClick={()=> dispatch({type: 'increment', value: 2} )}> Increment</button>
    <button onClick={()=> dispatch({type: 'decrement', value:3})}>Decrement</button>
    <button onClick={()=> dispatch({type: 'incrementby', value:1})}>increment-2</button>
    <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>

  )
}

export default Counter2