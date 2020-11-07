// react-declarative-jsx.js// react-declarative-jsx.js
import React from 'react';
import ReactDOM from 'react-dom'

const HelloWorld = () => {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));


