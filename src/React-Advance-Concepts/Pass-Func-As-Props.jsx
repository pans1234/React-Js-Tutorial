import { useState } from "react"

function PassFunctionChileDcomp({ onClickFromParent, userName }) {
    return (
        <>
            <button onClick={() => onClickFromParent(userName)}>Diplay Name</button>
        </>
    )
}

export default function PassFunctionAsProps() {
    const [user, setUser] = useState("")
    const displayName = (userName) => {
        alert(`Displayed Name is :, ${userName}`)
    }
    return (
        <>
            <h1>PassFunctionAsProps Understandig!</h1>
            <input type="text" placeholder="Enter User Name" onChange={(event) => setUser(event.target.value)}></input>
            <PassFunctionChileDcomp onClickFromParent={displayName} userName={user} />
        </>
    )
}