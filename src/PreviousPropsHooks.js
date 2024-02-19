import React, { useEffect, useRef } from 'react';


function PreviousPropsHooks(props) {
    const lastValue = useRef();
    useEffect(() => {
        lastValue.current = props.count
    })
    const previousValue = lastValue.current;
    return (
        <div>
            <h2>Previous Props Hooks in React : </h2>
            <h1>Current Value = {props.count}</h1>
            <h1>Previous Value = {previousValue}</h1>
            <h1>Difference of Current Value -  Previous Value = {props.count - previousValue}</h1>
        </div>
    )
}
export default PreviousPropsHooks;