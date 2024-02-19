import React from 'react';
import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
// import Count from './Count';
import Student from './Student';
import Form from './Form';
import Profile from './Profile';
import User from './User';
import Constructor from './Constructor';
import RendorMethod from './RendorMethod';
import CompMount from './CompMount';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import ComponentWillUnmount from './ComponentWillUnmount';
import HooksDemo from './HooksDemo';
import UseEffectHooks from './UseEffectHooks';
import UseEffectProps from './UseEffectProps';
import StyleType from './StyleType';
import './StyleType.css';
import HandleArrayWithList from './HandleArrayWithList';
import PureComponent from './PureComponent';
//import Table from 'react-bootstrap/Table';
import SahilSalam from './Components/SahilSalam';
import { Table } from 'react-bootstrap';
import NestedListArray from "./NestedListArray";
import ReuseComponent from './ReuseComponent';
import ReactFragment from './ReactFragment';
import UseMemoHook from './UseMemoHook';
import RefInReact from './RefInReact';
import UseRef from './UseRef';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import HOC from './HOC';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Routing from './Routing';
import ApiMethod from './ApiMethod';
import PreviosState from './PreviosState';
import PreviousPropsHooks from './PreviousPropsHooks';
import CommonContext from './Components/CommonContext';
import ReduxDemo from './ReduxDemo';




function App(props) {
  const [count, setCount] = useState(0)
  const personName = 'sahil-salam'
  function parentAlert(datasahil) {
    alert('parent fn is alerted by parent to child')
    alert(datasahil + ' alert is working by child to parent')
  }

  const users = [
    { name: 'sahil', email: 'sahil@gmail.com', contact: '8406808090' },
    { name: 'amir', email: 'amir@gmail.com', contact: '9887507441' },
    { name: 'abc', email: 'abc@gmail.com', contact: '87612345678' },
    { name: 'xyz', email: 'xyz@gmail.com', contact: '876' }
  ]
  // useEffect(()=>{
  //   console.warn('useeffect called');
  // })

  const [name, setName] = React.useState('Sahil Salam')
  function sahildata() {
    alert('Data Is Called:');
  }
  // const [fruit, setFruit] = useState('');
  // const [tnc, setTnc] = useState(false);
  // const [interest, setInterest] = useState('');

  // function getFormData(e) {
  //   alert('form is submitted')
  //   e.preventDefault();

  // }
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(true)
  const [status, setStatus] = useState(false)
  function getData(val) {
    // alert('data');
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
    //setData(val.target.value = '');


  }
  return (
    <div className='App'>
      {/* <ReduxDemo data='redux basic tutorial' /> */}
      <ReduxDemo data={{ name: 'sahil', age: 23, city: 'bangalore' }} />
      {/* <CommonContext.Provider ></CommonContext.Provider> */}
      {/* <CommonContext /> */}
      <hr></hr>
      {/* <PreviousPropsHooks count={count} /> */}
      {/* <button onClick={() => setCount(count + 1)}>Update Counter</button> */}
      {/* to generate random number between 100 use Math.random() function */}
      {/* <button onClick={() => setCount(Math.floor(Math.random() * 100))}>Update Counter</button> */}
      <hr></hr>
      {/* <PreviosState /> */}
      {/* <ApiMethod /> */}
      {/* <PageNotFound /> */}
      {/* <Link to="/home">Home Page</Link>
      <Link to="/about">About Page</Link>

      <Route path='/home'>                <Home /></Route>

      <Route path='/about'>                  <About /></Route>



      <h1>Routing in React :</h1> */}

      {/* <Routing /> */}
      {/* <HOC /> */}

      {/* <UnControlledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <UseRef /> */}
      {/* <RefInReact /> */}

      {/* <hr></hr> */}
      {/* <UseMemoHook /> */}
      {/* <UseMemoHook /> */}

      {/* <PureComponent /> */}
      {/* <h1>Lifting State Up</h1>
      <ReactFragment alert={parentAlert} /> */}
      {/* <ReuseComponent />
      <h1>ReuseComponent-----</h1> */}
      {/* <span>{props.users.name}</span>
            <span>{props.users.email}</span>
            <span>{props.users.contact}</span> */}
      {/* {
        users.map((item) =>
          <h1>Name =  {item.name} Email = {item.email}
          </h1>

        )
      } */}
      {/* <NestedListArray /> */}
      {/* <HandleArrayWithList /> */}
      {/* <StyleType /> */}
      {/* <UseEffectProps /> */}
      {/* <UseEffectHooks /> */}
      {/* <HooksDemo /> */}
      {/* <ComponentWillUnmount /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <CompMount /> */}
      {/* <RendorMethod name={name} />
      <button onClick={() => setName('Amir Salam')}>Update Name</button> */}
      {/* <Constructor /> */}
      {/* <User amir={sahildata} /> */}
      {/* <h1>get input box value</h1>
      {
        print ? <h1>{data}</h1> : null
      }
      <input type='text' onChange={getData} />{'-----'}
      <button onClick={() => setPrint(true)}>Print Data</button>
      <hr></hr>
      <h1>Using Show & Hide Button Toggle:</h1>
      {
        status ? <h1>Display when button is clicked : Hello </h1> : null
      }

      <button onClick={() => setStatus(true)}>Show</button> {'---'}
      <button onClick={() => setStatus(false)}>Hide</button> */}
      <br></br><hr></hr>
      <h1>Using Single Toggle Button:</h1>
      {
        status ? <h1>Display when button is clicked :Hide & Show Using Toggle Button :</h1> : null
      }
      <button onClick={() => setStatus(!status)}>Toggle Button</button>
      <hr></hr>
      {/* <h1> Handle Form in React :</h1>
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
      </form> */}
      {/* this is form component page tag */}
      {/* <Form /> */}
      {/* <Profile /> */}
    </div>
  )
}


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Sahil-Salam',
//       email: 'sahilsalam780@gmail.com',

//     }
//   }
//   render() {
// const styling = { backgroundColor: "lightgreen", textAlign: 'center', Color: 'blue', fontSize: 'larger', width: '200px', height: '50px', borderRadius: '20px' };
//     return (
//       <div className='App'>




{/* <h1>Props Using Class :</h1>
        <Student name={this.state.name} email={this.state.email} ></Student>

        <button onClick={() => this.setState({ name: 'Abdul Salam', email: 'Salmuddin@gmail.com' })} style={styling} >Update This:</button> */}
{/* {' Gap De'} */ }
{/* <button onClick={() => this.setState({ email: 'Salmuddin@gmail.com' })}>Email Update</button> */ }
//       </div>
//     );
//   }
// }

// const [name, setName] = useState('Amir-Salam')
// return (
//   <div className='App'>
//     <h1>Props in React with function:</h1>
//     <Student name={name}></Student>
//     <button onClick={() => { setName("Abdul-Salam") }}> Update Name :</button>
{/* <Student name='  Sahil' email='sahilsalam780@gmail.com'></Student> */ }
{/* <Student name='  Arman' email='abc@gmail.com' other={{ address: 'HSR Layout', phone: '8406808090' }}></Student> */ }
{/* <Student name='  Amir' email='amir-salam@gmail.com'></Student>
      <Student name='  Amir' email='amir-salam@gmail.com'></Student><Student name='  Amir' email='amir-salam@gmail.com'></Student> */}

//     </div >
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'this is sahil-salam',
//       number: 0,
//     }
//   }
//   apple() {
// alert('its working');
//     this.setState({ number: this.state.number + 1 })
//   }
//   render() {
//     return (
//       < div >

//         <h1>Hello everyone :</h1>
//         <h2>Tell me your Name ?</h2>
//         <h2>{this.state.name}</h2>
//         <h2>{this.state.number}</h2>
//         <button onClick={this.apple}>Update Button</button>{' '}
//         <button onClick={() => this.apple()}>Update Button-using arrow fn</button>

//       </div >

//     );
//   }
// }

// function App() {
// let data = "Sahil Salam";
// const [data, setData] = useState('Aamir')
//   let [data, setData] = useState(1);
//   function updateData() {
//     setData('Abdul');
// data = 'amir';
// alert(data);
//   }
//   function counterData() {
//     setData(data + 2);
//   }
// function Apple() {
// alert('Subscribed');
//   alert(data);
// }
//   return (
//     <div className="App">
//       <Count></Count>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//       {/* <button onClick={() => alert('button clicked')}>Click Me :</button> */}
//       {'                          '}
//       {/* <hr></hr>
//       <button onClick={Apple}>Subscribe :</button>{'  '}
//       <button onClick={() => Apple()}>Click Me to Subscribe:</button> */}

//       <hr></hr>
//       <h1>Counter button</h1>
//       <button onClick={counterData}>Counter</button>
//     </div>
//   );
// }
function Home() {
  return (
    <div>
      <h1>Home:</h1>
      <p>This is Home Page</p>

    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About:</h1>
      <p>This is About Page</p>

    </div>
  )
}
export default App;
