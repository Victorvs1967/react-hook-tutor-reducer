import { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 15
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState;
        default: return state;
    }
};

const CounterTwo = () => {
    const [ count, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>Count - {count.firstCounter}</h4>
            <h4>Count 2 - {count.secondCounter}</h4>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Count 2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Count 2</button>
        </div>
    )
};

export default CounterTwo;