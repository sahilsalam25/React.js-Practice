import React from 'react'

function ReduxDemo({ data }) {
    return (
        <div>
            <h2>redux-demo</h2>
            {/* <h2>data using props in redux :{data.name}</h2> */}
            <h2>data list using props in redux : name={data.name}</h2>
            <h2>data list using props in redux : age={data.age}</h2>
            <h2>data list using props in redux : city={data.city}</h2>
        </div>
    )
}

export default ReduxDemo;