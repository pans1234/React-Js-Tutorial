// An Uncontrolled Component in React is a form element 
// (like <input>, <textarea>, or <select>) 
// whose form data is handled by the DOM itself rather than by React state 
// (useState).

import { useRef } from "react"


export default function UnControlledFunc() {
    const inputRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        let name = inputRef.current.value;
        let password = passwordRef.current.value;
        console.log("================>  Name ===> ", { name })
        console.log("================>  Password ===> ", { password })

    }
    return (
        <>
            <h1> Uncontrolled Componnet Understanding!</h1>
            <form>
                <input type="text" placeholder="Enter Name" ref={inputRef} id="name" />
                <br />
                <br />
                <input type="password" placeholder="Enter Password" ref={passwordRef} id="password" />
                <br />
                <br />
                <button onClick={(event) => handleSubmit(event)}>Submit</button>
            </form>
        </>
    )
}