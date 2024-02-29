import React, { useState, useMemo } from 'react';

export const UseMemoSample: React.FC = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText('')
  }

  // numberOfCharacters1は再描画の度にitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
  // numberOfCharacters2はuseMemoを使い、itemsが新しくなったときだけ関数を実行してメモを更新する
  // 第２引数の配列の中にitemsがあるので、itemsが変更されたときだけ再計算される
  const numberOfCharacters2 = useMemo(() => items.reduce((sub, item) => sub + item.length, 0), [items]);

  return (
    <div>
      <p>UseMemoSample</p> 
      <div>
        <input type="text" value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>number of characters1: {numberOfCharacters1}</p>
        <p>number of characters2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}