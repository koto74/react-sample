import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/useReducerSample';
import { Parent } from './components/Parent';
import { ParentCallBack } from './components/useCallBackSample';
import { UseMemoSample } from './components/useMemoSample';

function App() {
  return (
    <div className="App">
      <UseMemoSample />
    </div>
  );
}

export default App;
