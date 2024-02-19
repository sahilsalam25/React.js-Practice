import React, { useState } from 'react'

function PreviosState() {
    const [count, setCount] = useState(1);
    function updateCounter() {
        // setCount(count + 1);
        // const randomValue = (Math.floor(Math.random() * 15));
        // setCount((prev) => {
        //     console.warn(prev)
        //     if ((prev - randomValue < 5)) {
        //         alert('value is less than 5')
        //     }
        //     return randomValue;
        // })
        // Using for loop : 
        for (let i = 0; i < 3; i++) {
            setCount((prev) => {
                return prev + 1;
            })
        }
    }
    return (
        <div>
            <h1>Previos State in React: {count}</h1>
            <button onClick={updateCounter}>Click to Update Counter</button>
        </div>
    )
}
export default PreviosState;