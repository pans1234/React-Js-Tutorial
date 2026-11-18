import { useRef } from "react";

function UseRefHooks() {
    // UseRef ---> Hooks actually helps to manipulate the DOM elemnet Directly without maintaining
    // state but in recat it is not recomended because it creates ambiguity , and dircetly handling DOm actually cause bugs
    // hence it is adviable to use the state to make change in Dom element 
    // for iNput Chnage you can use a state whose value will be updated  showcase in UI Input Field 
    // throgh sttae and state will change onChnage() event where it call event.target.value etcliek we have did controlled Component Example
    const inputRef = useRef(null);
    const headingRef = useRef();
    const handleInputField = () => {
        inputRef.current.value = "Please Start Writting...";
        inputRef.current.focus();
        inputRef.current.style.color = 'red'
    }

    const handleHeading = () => {
        headingRef.current.style.color = 'blue';
    }

    return (
        <>
            <h1 ref={headingRef}>UseReference Direct DOM Manipulatin without State</h1>
            <input ref={inputRef} type="text" placeholder="enter name" />
            <br /><br />
            <button onClick={() => { return handleInputField(), handleHeading() }}>Focus and Start</button>
        </>
    )
}

export default UseRefHooks;