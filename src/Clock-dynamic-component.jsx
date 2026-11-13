import { useEffect, useState } from 'react';
function DeafultClockComponent({ userSetColor }) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])
    return (
        <>
            <h1>Current Time:</h1>
            <h2 style={{
                color: userSetColor, backgroundColor: "#000", width: "200px", padding: "10px", margin: "210px"
            }}
            >{time}</h2>
        </>
    )
}

export default DeafultClockComponent; 