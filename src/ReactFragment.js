import React, { Fragment } from 'react';

function ReactFragment(props) {
    const data = 'sahil'
    return (
        <Fragment>
            {/* <h1 className='sahil'>ReactFragment</h1>
            <h2>This is using Fragment</h2> */}
            <h1>Name of the person is {props.personName}</h1>
            <button onClick={() => props.alert(data)}>Click Me</button>

        </Fragment>
    )
}
export default ReactFragment;