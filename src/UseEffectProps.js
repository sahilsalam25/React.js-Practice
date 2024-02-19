import React, { useEffect, useState } from 'react';

function UseEffectProps(props) {
    useEffect(() => {
        // alert('fn is made with useeffect')
        console.log('Count = ', props.count);
        alert('total count = ' + props.count);
    })
    return (
        <div>
            <h1>Count Props : {props.count}</h1>
            <h1>Data Props : {props.data}</h1>

        </div>
    )
}
export default UseEffectProps;