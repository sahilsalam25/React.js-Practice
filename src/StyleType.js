import React from 'react';

function StyleType() {
    const StylingCss = {
        backgroundColor: '#dfbb7e',
        color: 'white',
        fontSize: '50px'
    }
    return (
        <div >
            <h1 className='first'>This is Style type - 1, Using External CSS for Styling</h1>
            <h1 style={{ backgroundColor: 'skyblue', color: 'white' }}>This is Style type - 2,  Using Internal CSS for Styling</h1>
            <h1 style={StylingCss}>This is Style type - 3, using a variable for styling</h1>
        </div>
    )
}
export default StyleType;