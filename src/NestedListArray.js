import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function NestedListArray() {
    // const styling = {
    //     border: "2px solid black", borderCollapse: "collapse",
    //     backgroundColor: '#96D4D4',
    //     borderRadius: '10px',
    // }
    const details = [
        {
            name: 'sahil', email: 'sahil@gmail.com', contact: '8406808090', address: [
                { HN: '01', city: 'bangalore', state: 'karnataka' },
                { HN: '02', city: 'Tumkur', state: 'karnataka' },
                { HN: '03', city: 'Nawada', state: 'Bihar' }]
        },
        {
            name: 'amir', email: 'amir@gmail.com', contact: '9887507441', address: [
                { HN: '01', city: 'bangalore', state: 'karnataka' },
                { HN: '02', city: 'Tumkur', state: 'karnataka' },
                { HN: '03', city: 'Nawada', state: 'Bihar' }]
        },
        {
            name: 'abc', email: 'abc@gmail.com', contact: '87612345678', address: [
                { HN: '01', city: 'bangalore', state: 'karnataka' },
                { HN: '02', city: 'Tumkur', state: 'karnataka' },
                { HN: '03', city: 'Nawada', state: 'Bihar' }]
        },
        { name: 'xyz', email: 'xyz@gmail.com', contact: '876' }
    ]
    return (
        <div>
            <h1>Nested List With Nested Array</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>address</td>
                    </tr>
                </tbody>
                {
                    details.map((items) =>
                        <tr>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.contact}</td>
                            <td>
                                {
                                    items.address.map((data) =>
                                        <tr>
                                            <td>{data.HN}</td>
                                            <td>{data.city}</td>
                                            <td>{data.state}</td>
                                        </tr>
                                    )
                                }
                            </td>
                        </tr>
                    )
                }
            </Table>


        </div>
    )
}

export default NestedListArray;