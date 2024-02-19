import React, { useState, useMemo } from 'react';
// useMemo is used to prevent un wanted called function

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const multiCountMemo = useMemo(function multiCount() {
        // return count * 2;
        return count * count;
    }, [count]) // now this useMemo is only called count in console window, but before using this in console both count , item is called

    return (
        <div>
            <h1>UseMemoHook in React, Count = {count} & Item = {item}</h1>
            <h2>Count Value Using multiCountMemo is : {count} * {count} = {multiCountMemo}</h2>
            <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'skyBlue', margin: '8px' }}>Click Me to Update Count</button>
            <button style={{ backgroundColor: 'lightGreen', margin: '1px' }} onClick={() => setItem(item + 1)}>Click Me to Update Item</button>
        </div>
    )
}
export default UseMemoHook;