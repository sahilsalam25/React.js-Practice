import React from 'react';
class shouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate", this.state.count);
        if (this.state.count > 5 && this.state.count < 150) {
            return true;
        }

        // if we keep return false then it will not update on screen i.e front end
    }
    render() {
        return (
            <div>
                <h1>this is shouldComponentUpdate  : {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter</button>
            </div>
        )
    }
}
// function CompDidUpdate() {
//     return (
//         <div>
//             <h1>Component Did Update : </h1>
//         </div>
//     )
// }
export default shouldComponentUpdate;