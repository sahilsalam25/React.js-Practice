import React, { Component } from 'react'

class ControlledComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sahil Salam , EC025'
        };
    }
    changeHandler = (event) => {
        console.log("old data", this.state);
        const name = event.target.value;
        this.setState({ name }, () => {
            console.log("new data", this.state);
        });
    }
    render() {
        return (
            <div>
                <h1>this is from</h1>

                <form>
                    <input type='text' name='user-name' value={this.state.name} onChange={this.changeHandler} />
                    this is the form :

                </form>
            </div>
        )
    }
}

export default ControlledComponents;