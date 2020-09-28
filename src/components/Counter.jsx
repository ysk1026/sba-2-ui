import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handelPlus = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }
    return <>

        <h1>TODO App</h1>
        <h1>Counter : {count} </h1>
        <button onClick={handelPlus}> + </button>
        <button onClick={handleMinus}> - </button>
    </>
}

export default Counter