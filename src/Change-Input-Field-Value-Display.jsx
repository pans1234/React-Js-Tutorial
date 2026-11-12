import { useState } from 'react'
export function ChangeInputFieldValueDisplay() {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input type="text" value={inputValue} placeholder="Enter your name" onChange={(event) => setInputValue(event.target.value)} />
            <p>Input Value: {inputValue}</p>
            <button onClick={() => setInputValue("")}>Clear Input</button>
        </>
    )
}