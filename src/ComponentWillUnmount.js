// import React from 'react';
import React, { Component } from 'react';
class ComponentWillUnmount extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    componentWillUnmount() {
        alert('toggle is done :', this.state.show);
    }
    render() {
        return (
            <div>
                <h1>ComponentWillUnmount</h1>
                {
                    this.state.show ? <h1>it's showing, it is true</h1> : <h2>it is not showing , it is false</h2>
                }
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle</button>
            </div>
        )
    }
}



// function ComponentWillUnmount() {

//     return (
//         <div>
//             <h1>ComponentWillUnmount</h1>
//             <button>Toggle</button>
//         </div>
//     )
// }
export default ComponentWillUnmount;