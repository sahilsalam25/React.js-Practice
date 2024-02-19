import React, { useRef } from 'react'
// useRef is Hook: everything start with word use that means it is a hook
function UseRef() {
    let inputRef = useRef(null)
    function handleInputRef() {
        //alert('testing ref')
        inputRef.current.value = 'sahil salam'
        inputRef.current.focus(); // it is used to indicate cursor in the input element
        inputRef.current.style.backgroundColor = "skyBlue" // it is used to customize the styling part
    }
    return (
        <div>
            <h1>UseRef in React</h1>
            <input type='text' ref={inputRef} />
            <button onClick={handleInputRef}>Handle Input Ref</button>
        </div>
    )
}
export default UseRef;