import React, { useRef } from 'react'

function UnControlledComponent() {
    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)

    function submitForm(event) {
        event.preventDefault(); // React is single page app so it is not reload during submission of from so thats why we use event.preventDefault(); to prevent reloading of page.

        console.log('input field 1', inputRef1.current.value);
        console.warn('input field 2', inputRef2.current.value);
        // console.log(inputRef2);
        let input3 = document.getElementById('input3').value;
        console.log('input field 3', input3);

    }
    return (
        <div>
            <h1> UnControlledComponent in React :</h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef1} type='text' /> <br /><br />
                <input ref={inputRef2} type='text' /><br /><br />
                <input id='input3' type='text' />
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UnControlledComponent;