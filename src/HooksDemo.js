import React from 'react';
import { useState } from 'react';
function HooksDemo() {
    const [name, setName] = useState('Sahil-Salam')
    return (
        <div>
            <h1>Welcome : {name} to HooksDemo Series</h1>
            <button onClick={() => setName('Amir Salam')}>Update one</button>
        </div>
    )
}
export default HooksDemo;