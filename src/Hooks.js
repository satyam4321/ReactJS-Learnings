import { useEffect, useState } from "react";

import Pro from "./Props";

function Hooks() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);
    
    // useEffect(() => {
    //     console.log('data is ' + data);
    // }, [data])

    // useEffect(() => {
    //     alert('count is' + count)
    // }, [count])
    return (
        <div>
            <Pro data ={data} count = {count}/>
            {/* <h1>Data: {data}</h1> */}
            {/* <h1>Count: {count}</h1> */}
            <button onClick={() => setData(data + 1)}>update Data</button>
            <br />
            <br />
            <button onClick={() => setCount(count + 1)}>update Count</button>
        </div>
    )
}

export default Hooks;