// import React from 'react';

// function Student(alam) {
//     // console.log(alam.name);
//     // console.log(alam.email);
//     return (
//         <div style={{ backgroundColor: "skyblue", textAlign: 'center', Color: 'green', fontSize: 'large' }}>
//             <h1>Props in React with function:</h1>
//             <h1>Hello : {alam.name}</h1>
//             {/* <h1>Hello :{alam.name} Email :{alam.email}</h1>
//             <h1>Address :{alam.other.address}<hr></hr>Phone:{alam.other.phone}</h1> */}
//             {/* <h1>Hello :{alam.name} Email :{alam.email}</h1>
//             <h1>Hello :{alam.name} Email :{alam.email}</h1> */}
//         </div>
//     )
// }
// export default Student;

import React from "react";
class Student extends React.Component {
    render() {
        const styling = { backgroundColor: "lightgreen", textAlign: 'center', Color: 'blue', fontSize: 'larger' };
        return (
            <div style={styling}>
                <h1>This is {this.props.name} Email id : {this.props.email}</h1>
            </div>

        );
    }
}
export default Student;