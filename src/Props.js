import {useState, useEffect} from "react";

function Pro(props) {

    useEffect(() => {
        alert('Count is ' + props.count);
    }, [props.count])
    useEffect(() => {
        console.log('Count is ' + props.data );
    }, [props.data])
    return (
        <div>
            <h1>Data Props: {props.data}</h1>
            <h1>Count Props: {props.count}</h1>
        </div>
    )
}

export default Pro;