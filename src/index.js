import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

ReactDOM.render(<div>hi</div>,
  document.getElementById('root')
);

// 调用组件App
ReactDOM.render(<App />,document.getElementById('root'))