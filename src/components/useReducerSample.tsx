import { useReducer } from "react";

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionに基づいて次の状態を返すreducer
const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT':
      return state + 1;
    case 'DOUBLE':
      return state * 2;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

type CounterProps = {
  initialState: number
}

const Counter: React.FC<CounterProps> = ({ initialState }) => {
  // useReducerにreducerと初期値を渡す
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch('DECREMENT')}>-1</button>
      <button onClick={() => dispatch('INCREMENT')}>+1</button>
      <button onClick={() => dispatch('DOUBLE')}>*2</button>
      <button onClick={() => dispatch('RESET')}>reset</button>
    </div>
  );
}

export default Counter;

