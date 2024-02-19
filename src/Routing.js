import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Routing() {
    return (
        <div>
            <Router>
                <Link to="/home">Home Page</Link>
                <Link to="/about">About Page</Link>
                <Route path='/home'>                <Home /></Route>
                <Route path='/about'>                  <About /></Route>


                <h1>Routing in React :</h1>
            </Router>
        </div>
    )
}
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
export default Routing;