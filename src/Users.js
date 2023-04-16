import React from "react";

function Users(props) {
    return (
      <div className="App">
        <h1>User Component</h1>
        <button onClick={() => props.call()}>Click Me</button>
      </div>
    );
  }
  
  export default Users;