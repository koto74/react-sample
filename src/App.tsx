import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/useReducerSample';
import { Parent } from './components/Parent';
import { ParentCallBack } from './components/useCallBackSample';
import { UseMemoSample } from './components/useMemoSample';
import { Clock } from './components/Clock';

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
