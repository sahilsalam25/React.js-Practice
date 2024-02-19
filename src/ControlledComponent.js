import React, { useState } from 'react'
// ControlledComponent is used to manipulate from or input element through useState method :
function ControlledComponent() {
    // void val :  const [val, setVal] = useState('sahil');
    const [val, setVal] = useState('sahil');
    const [items, setItems] = useState('Amir')
    return (
        <div>
            <h1>ControlledComponent</h1>
            <input type="text" value={val} onChange={(event) => setVal(event.target.value)} />
            {'-----------'}
            <input type="text" value={items} onChange={(event) => setItems(event.target.value)} />
            <h1>val is : {val} & items is : {items}</h1>

        </div>
    )
}
export default ControlledComponent;