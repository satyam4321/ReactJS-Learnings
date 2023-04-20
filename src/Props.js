import {useState, useEffect, useMemo} from "react";

function Pro(props) {

    // useEffect(() => {
    //     console.log('Data is ' + props.count);
    // }, [props.count])
    // useEffect(() => {
    //     console.log('Count is ' + props.data );
    // }, [props.data])
    const multiCountmemo = useMemo(function multiCount() {
        console.log('multicount');
        return props.data * 5;
    }, [props.data])
    return (
        <>
            <h1>Data Props: {props.data}</h1>
            <h1>Count Props: {props.count}</h1>
            <h1>multiCount Props: {multiCountmemo}</h1>
        </>
    )
    // const value = {name: "Maurya", email: "sm@123.com"}
    // return (
    //     <>
    //         {/* Receiving data from Parent (APP) */}
    //         <h1>User : {props.name}</h1>
    //         {/* Sending data from (Props)child Component to (App)Parent Component */}
    //         <button onClick={() => props.alert(value)}>Click Me</button>
    //     </>
    // )
}

export default Pro;