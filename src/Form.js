import React from "react";
import { useState } from 'react';


function Form() {
    const [fruit, setFruit] = useState('');
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState('');
    function getFormData(e) {
        alert('form is submitted')
        e.preventDefault();

    }
    return (
        <div>
            <h1> Handle Form in React :</h1>
            <form onSubmit={getFormData}>
                <input type='text' placeholder='Enter Name' onChange={(e) => setFruit(e.target.value)} /><br></br>
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Fruits</option>
                    <option>Apple</option>
                    <option>Guava</option>
                    <option>WaterMelon</option>
                    <option>Papaya</option>
                </select> <hr></hr>
                <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} />{'  '}<span>Accepts Terms & Conditions :</span>
                <br>
                </br>
                <button type='submit'>Submit Form</button>
            </form>
        </div>
    )
}
export default Form;