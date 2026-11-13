import { useState } from 'react'
import DeafultClockComponent from './Clock-dynamic-component'
function DropdownChangeColorClock() {
    const [color, setColor] = useState("green");

    return (
        <>
            <select onChange={(event) => setColor(event.target.value)} defaultValue={color}>
                <option value="green">Green</option>
                <option value="orange">Ornage</option>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
            </select>
            <DeafultClockComponent userSetColor={color} />
        </>
    )
}
export default DropdownChangeColorClock;