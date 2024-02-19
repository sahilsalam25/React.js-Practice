

import React, { PureComponent } from 'react'
// PureComponent is used to prevent re-rendering the element when it is not updating :
class Purecomponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>PureComponent in React : Count = {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>

            </div>
        )
    }
}
export default Purecomponent;


