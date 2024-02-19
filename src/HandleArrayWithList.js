import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

// or less ideally
import { Table } from 'react-bootstrap';
//import Table from 'react-bootstrap/Table';



function HandleArrayWithList() {
    // const person = ['sahil', 'amir', 'imaad', 'shakib'];
    const details = [
        { name: 'sahil', email: 'sahil@gmail.com', contact: '8406808090' },
        { name: 'amir', email: 'amir@gmail.com', contact: '9887507441' },
        { name: 'abc', email: 'abc@gmail.com', contact: '87612345678' },
        { name: 'xyz', email: 'xyz@gmail.com', contact: '876' }
    ]
    // person.map((value) => {
    //     console.log(`the person's are using Map()` + value);
    // })
    // for (let i = 0; i < person.length; i++) {
    //     console.log(`the person's are using for loop `, person[i]);

    // }
    return (
        <div>
            <h1>HandleArrayWithList</h1>
            <table border="4">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {
                        details.map((data) =>
                            data.name === 'amir' ?
                                < tr >
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.contact}</td>
                                </tr> : ''
                        )
                    }
                </tbody>
            </table>

            {/* {
                person.map((data) => (
                    <>
                        
                        <h1>print array element using Map(),Name = {data}   </h1>
                    </>

                )
                )

            } */}

        </div >
    )
}


export default HandleArrayWithList;