import React from "react";

// function Users(props) {
//     return (
//       <div className="App">
//         <h1>User Component</h1>
//         <button onClick={() => props.call()}>Click Me</button>
//       </div>
//     );
//   }

class Users extends React.Component{
  
  constructor() {
    super();
    this.state = {
      // email: 'satya@test.com'
      count: 0
    }
    console.log('Constructor');
  }
  componentDidMount() {
    // It only calls at the moment when the  component is first created
    console.log('componentDidMount');
  }
  componentDidUpdate(preProps, preState, snapshot) {
    // console.log('componentDidUpdate');
    console.log("Componenet update", preState.count, this.state.count);
    if(preState.count == this.state.count){
      alert("Data is already present");
    }
    if(this.state.count < 10) {
      this.setState({count: this.state.count + 1});
    }
  }
  render() {
    console.log("Render Method")
    
    // console.log(this.state.email);
    console.log(this.state.count);
    return(
      <div>
        {/* <h1>User {this.props.name}</h1> */}
        <h1>User Component {this.state.count}</h1>
        {/* <button onClick={() => this.setState({email: 'maurya@test.com'})}>Update Email</button> */}
        <button onClick={() => this.setState({count: 1})}>Update count</button>
      </div>
    )
  }
} 
  
export default Users;