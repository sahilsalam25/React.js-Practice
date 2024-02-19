import React, { useState } from 'react'

function ApiMethod() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    function saveUser() {
        let data = { name, email, mobile }
        console.log('Input Form Data is : ', data);

        fetch('http://localhost:3000/', { // Write a external Api Path/write a POST API external link from where you want to add data :
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log('result is', result);
            result.json().then((resp) => {

                console.log('response', resp);
            })
        })
    }
    return (
        <div>
            <h1>POST ApiMethod in React: </h1>
            {/* <p>API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses.</p> */}
            <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} name='name' /> <br></br><br></br>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' /> <br></br><br></br>
            <input type='mobile' value={mobile} onChange={(e) => { setMobile(e.target.value) }} name='mobile' /> <br></br><br></br>
            {/* <input type='text' name='name' /> <br></br><br></br> */}
            <button onClick={saveUser} type='button'>Save New User</button>
        </div>
    )
}

export default ApiMethod;