import React from 'react';
class CompMount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Sahil Salam'
        }
        console.warn('constructor');
    }
    CompDidMount() {
        console.warn('CompDidMount');
    }
    render() {
        console.warn('Render');
        return (
            <div>
                <h1>Component Did Mount : {this.state.name}</h1>
                <button onClick={() => { this.setState({ name: 'Amir Salam' }) }}>Update Name</button>

            </div>
        );
    }
}

// function CompMount() {
//   return (
//     <div>CompMount</div>
//   )
// }

export default CompMount;