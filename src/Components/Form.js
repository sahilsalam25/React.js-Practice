import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            country: null,
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({ name, country }, () => {
            console.log(this.state);
        })
    };
    // this is for the practice when data is filling
    // nameChangeHandler = (event) => {
    // alert('sahil');
    //     console.log(event.target.value);

    // }
    // nameChangeHandler = (event) => {
    // alert('sahil');
    //     console.log(event.target.value);

    // }


    render() {
        return (
            <div>
                {/* <form onSubmit={this.submitHandler}>
                    <label htmlFor=''>Name</label> */}
                {/* this is for the practice when data is  */}
                {/* <input type="text" name='name' onKeyUp={this.nameChangeHandler} /> */}
                {/* <input type="text" name='name' />
                    <hr />
                    <label htmlFor=''>Number</label> */}

                {/* this is for the practice when data is  */}
                {/* <select onChange={this.nameChangeHandler}> */}
                {/* <select >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button type='submit'>Submit </button>
                </form> */}

            </div>
        )
    }
}

export default Form