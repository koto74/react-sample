import React, { memo, useState } from 'react';

type FizzProps = {
  isFizz: boolean
}

// Fizzは通常の関数コンポーネント
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz: React.FC<FizzProps> = ({ isFizz }) => {
  console.log('Fizz');
  return <p>{isFizz ? 'Fizz' : ''}</p>;
};

type BuzzProps = {
  isBuzz: boolean
}

// Buzzはメモ化した関数コンポーネント
// 親コンポーネントが再描画されても、isBuzzが変化しない限り再描画されない
const Buzz: React.FC<BuzzProps> = memo(({ isBuzz }) => {
  console.log('Buzz');
  return <p>{isBuzz ? 'Buzz' : ''}</p>;
});

export const Parent: React.FC = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log(`Parentが再描画された, count: ${count}`);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  );
}
