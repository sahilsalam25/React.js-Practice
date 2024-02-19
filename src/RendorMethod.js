import React from 'react';
class RendorMethod extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'sahilsalamece25@gmail.com'
        }
        console.log(this.props);
    }
    render() {
        console.log(this.state.email);
        // alert('name is updated')
        return (
            <div>
                {/* <h1>Rendor Method in React : {this.props.name}</h1> */}
                <h2>This button is used to update email using this.state Method</h2>
                <button onClick={() => this.setState({ email: 'amirsalam780@gmail.com' })}>Update Email</button>
            </div>
        );
    }
}
export default RendorMethod;