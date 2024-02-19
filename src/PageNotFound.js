import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Switch } from "react-router-dom";

function $404PageNotFound() {
    return (
        <div>
            <Router>
                <Switch>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Route path='/' exact={true}><Home /></Route>
                    <Route path='/about' ><About /></Route>
                    <Route path='#' ><Page404NotFound /></Route>
                </Switch>
            </Router>
            <h1>404PageNotFound</h1>

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
function Page404NotFound() {
    return (
        <div>
            <h1>404:</h1>
            <p>This is About 404PageNotFound</p>

        </div>
    )
}
export default $404PageNotFound;