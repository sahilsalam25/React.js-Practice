import React, { useState } from 'react'

function HOC() {
    return (
        <div>
            <HOCRed cmp={Counter} /><hr></hr>
            <HOCGreen cmp={Counter} /><hr></hr>
            <HOCBlue cmp={Counter} /><hr></hr>
            <Counter />
            <Counter />

            <h1>HOC (High Order Component)</h1>
        </div>
    )
}
function HOCRed(props) {
    return <div> <h2 style={{ backgroundColor: 'red', width: 150, height: 60 }}>
        <props.cmp /></h2><br></br> <br></br>

    </div>

}
<br></br>
function HOCGreen(props) {
    return <div> <h2 style={{ backgroundColor: 'green', width: 150, height: 50 }}>
        <props.cmp /></h2>
        <br></br> <br></br>
        {/* <h2 style={{ backgroundColor: 'green', width: 150, height: 50 }}>
            <props.cmp /></h2>
        <br></br> <br></br> */}
    </div>

}
<br></br>
function HOCBlue(props) {
    return <div> <h2 style={{ backgroundColor: 'blue', width: 150, height: 70 }}>
        <props.cmp /></h2>
        <br></br> <br></br>
    </div>

}
<br></br>
function Counter() {
    const [count, setCount] = useState(0);
    return <div>
        <div style={{ height: '650px' }}>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Update + 1</button>
        </div>
        {/* <button onClick={() => setCount(count - 1)}>Update - 1</button>
        <button onClick={() => setCount(count * 1)}>Update * 1</button>
        <button onClick={() => setCount(count / 1)}>Update / 1</button> */}
        <div style={{ height: '550px' }}>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count - 1)}>Update - 1</button>
        </div>
    </div>
}
export default HOC;