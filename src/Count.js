
import React, { useState } from 'react';

function ExampleComponent() {
    // useState returns an array with two elements: the current state value and a function that lets you update it
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter Button is given below :</h1>

            <h3>You clicked {count} times</h3>
            {/* onClick event triggers the setCount function to update the count */}
            <button onClick={() => setCount(count + 1)}>
                Click me to update-Data
            </button>
            <hr></hr>
        </div>
    );
}
export default ExampleComponent;
