import React, { useState, useCallback } from 'react';

type ButtonProps = {
  onClick: () => void
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton: React.FC<ButtonProps> = ({ onClick }) => {
  console.log('DecrementButtonが再描画された');
  return <button onClick={onClick}>Decrement</button>;
};

// IncerementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton: React.FC<ButtonProps> = React.memo(({ onClick }) => {
  console.log('IncrementButtonが再描画された');
  return <button onClick={onClick}>Increment</button>;
});

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton: React.FC<ButtonProps> = React.memo(({ onClick }) => {
  console.log('DoubleButtonが再描画された');
  return <button onClick={onClick}>Double</button>;
});

export const ParentCallBack: React.FC = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((c) => c - 1)
  }
  const Increment = () => {
    setCount((c) => c + 1)
  }
  // useCallbackを使って、関数をメモ化
  const double = useCallback(() => {
    setCount((c) => c * 2)
    // 第２引数に空の配列を渡すことで、初回のレンダリング時のみ関数を生成する
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={Increment} />
      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  )
}
