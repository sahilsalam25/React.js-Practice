import React, { useEffect, useState } from 'react';
import UseEffectProps from './UseEffectProps';

function UseEffectHooks() {
    const [count, setCount] = useState(10)
    const [data, setData] = useState(20)
    useEffect(() => {
        // alert('fn is made with useeffect')
        console.log('Count = ', count);
        // alert('total count = ' + count);
    })
    useEffect(() => {
        // alert('fn is made with useeffect')
        console.warn('Data = ', data);
    })
    return (
        <div>
            <UseEffectProps count={count} data={data} />
            {/* <h1>UseEffectHooks in React : </h1>
            <h1>Count = {count}</h1> */}
            <button onClick={() => setCount(count + 1)}>Update Count</button> {' ----- '}
            {/* <h1> Data = {data}</h1> */}
            <button onClick={() => setData(data + 1)}>Update Data</button>
        </div>
    )
}
export default UseEffectHooks;

//  Using Hooks With Class Component is given below :
// In React, hooks are typically used in functional components to add state and lifecycle features. However, with the introduction of React 16.8, you can also use hooks in class components through the react-hooks-polyfill library.

// The react-hooks-polyfill library allows you to use hooks in class components by providing a wrapper around them. Keep in mind that using hooks in class components might not be as clean or idiomatic as using them in functional components. Functional components are the preferred way to use hooks in React.

// Here's a basic example of how you might use the react-hooks-polyfill library to use hooks in a class component:
// import React from 'react';
// import { useState } from 'react-hooks-polyfill';

// class ExampleClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Initialize state using the useState hook
//     this.state = useState(0);
//   }

//   render() {
//     const [count, setCount] = this.state;

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   }
// }

// export default ExampleClassComponent;
