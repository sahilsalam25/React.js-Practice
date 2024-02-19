import React from "react";
class Constructor extends React.Component {
    constructor() {
        // constructor () is alaways called before render()
        super();
        this.state = {
            data: 'Name=Sahil-Salam',
            email: 'sahilsalam780@gmail.com'
        }
    }
    render() {
        return (
            <h1>This is Example of Constructor using Class :{this.state.data}<hr></hr> Email = {this.state.email} <hr></hr>
            </h1>

        )
    }
}
export default Constructor;