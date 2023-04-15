import logo from './logo.svg';
import './App.css';
import Users from './Users';

import {useState} from 'react';

// alert("hello");
function App() {
  const [data, setData] = useState(null);
  const [status, setShow] = useState(false);
  const [intrest, setIntrest] = useState(null);
  const [ch, setCh] = useState(false);
  // function apple() {
  //   setData(data + 1)
    // alert("function called");
  // }
 
  // function getvalue(val) {
  //   console.log(val.target.value);
  //   setData(val.target.value);
  // }

  function getFormData(e) {
    console.log(data, intrest);
    e.preventDefault();
  }
  console.log('hello');
  return (
    <div className="App">
      {
        status ? 
          <h1>{data}</h1>
        :
        <h1>{null}</h1>
      }
      <form onSubmit={getFormData}>
        <input type = "text" placeholder='Enter Name' onChange={(e) => {setData(e.target.value)}}/>
        {
          status ? <button onClick={() => {setShow(false)}}>hide</button>
          :
            <button onClick={() => {setShow(true)}}>show</button>
        }
        <br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br /><br />
        <input type='checkbox' onChange={(e) => setCh(e.target.checked)}/><span>Accept the terms and conditions</span>
        
        <button type='submit'>Submit</button>
          
        {/* <button onClick={() => {setShow(!status)}}>Toggle</button> */}
        {/* <button onClick={apple}>click me</button> */}
        </form>
    </div>
  );
}

export default App;
