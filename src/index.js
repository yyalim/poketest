import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function HelloWorld() {
  return <p className="greet">Hello World!</p>;
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
