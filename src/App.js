import logo from './logo.svg';
import './App.css';
import Users from './Users';

import {useState} from 'react';

// alert("hello");
function App() {
  const [data, setData] = useState(0);
  function apple() {
    setData(data + 1)
    // alert("function called");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <button onClick={() => alert("hello")}>click me</button> */}
      <button onClick={apple}>click me</button>
    </div>
  );
}

export default App;
