import { useState } from "react";
import React from "react";
class Student extends React.Component {
    // Whenever the component removed from the DOM then component unmount will be called.
    componentWillUnmount() {
        console.log("componentWillUnmount");
      }
    render () {
        return(
            <h1>Student Component</h1>
        )
    }
}

export default Student;