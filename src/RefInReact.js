import React, { Component, createRef } from 'react'
// Ref is used to change the dom value anywhere in class & function:
class RefInReact extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
        // this.outputRef = createRef();
    }
    componentDidMount() {
        // console.warn(this.inputRef.current.value = 'sahil salam');
        // this.inputRef.current.style.backgroundColor = "rose";
        // this.inputRef.current.style.color = "white";
        // this.inputRef.current.style.fontSize = "small";
        // this.inputRef.current.style.borderRadius = '5px';
        // this.inputRef.current.style.textAlign = "center";
    }
    getValue() {
        console.warn(this.inputRef.current.value = 'Amir salam');
        this.inputRef.current.style.backgroundColor = "purple";
        this.inputRef.current.style.color = "white";
        this.inputRef.current.style.fontSize = "large";
        this.inputRef.current.style.borderRadius = '10px';
        this.inputRef.current.style.textAlign = "center";
    }
    render() {
        return (
            <div>
                <h1>RefInReact</h1>
                <input type='text' ref={this.inputRef} />
                <button style={{ backgroundColor: 'skyBlue', margin: '8px' }} onClick={() => this.getValue()}>Check Ref</button>
                {/* <input type='text' ref={this.outputRef} />
                <button style={{ backgroundColor: 'skyBlue', margin: '8px' }} onClick={() => this.componentDidMount()}>Check Ref</button> */}
            </div>
        )

    }

}
export default RefInReact;