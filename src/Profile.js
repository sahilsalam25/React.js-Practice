import React from 'react';
import { useState } from 'react';

function Profile() {
    const [checkkar, setamir] = useState(true)
    return (
        <div>
            {/* ternary is used to check the condition and return result */}
            <h1>this is Profile :</h1>
            {checkkar ? <h1>Welcome  Sahil</h1> : <h2>Hello  third party</h2>}
        </div>
    )
}
export default Profile;
//loggedIn