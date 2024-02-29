import React from 'react';

// titleを渡すためのContextを作成
const TitleContext = React.createContext<string>('');

// titleコンポーネントの中でContextお値を参照
const Title: React.FC = () => {
  // Consumerを使って、Contextの値を参照
  return (
    <TitleContext.Consumer>
      {(title) => <h1>{title}</h1>}
    </TitleContext.Consumer>
  );
};

const Header: React.FC = () => {
  return (
    <div>
      {/* HeaderからTitleへは何もデータを渡さない */}
      <Title />
    </div>
  )
}

// Pageコンポーネントの中でContextに値を渡す
const Page: React.FC = () => {
  const title = 'react context sample'
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
