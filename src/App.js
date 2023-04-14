import logo from './logo.svg';
import './App.css';
import Users from './Users';

import {useState} from 'react';

// alert("hello");
function App() {
  const [data, setData] = useState(null);
  const [status, setShow] = useState(false);
  // function apple() {
  //   setData(data + 1)
    // alert("function called");
  // }
 
  function getvalue(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div className="App">
      {
        status ? 
          <h1>{data}</h1>
        :
        <h1>{null}</h1>
      }
      <input type = "text" onChange={getvalue}/>
      {
        status ? <button onClick={() => {setShow(false)}}>hide</button>
        :
          <button onClick={() => {setShow(true)}}>show</button>
      }
        
      {/* <button onClick={() => {setShow(!status)}}>Toggle</button> */}
      {/* <button onClick={apple}>click me</button> */}
    </div>
  );
}

export default App;
