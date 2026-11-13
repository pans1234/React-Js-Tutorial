import { useState } from 'react'

function CheckboxValueDisplay() {
    const [checkboxValue, setCheckBoxValue] = useState([])

    function handleCheckboxChange(event) {
        if (event.target.checked) {
            // In react dont change state directly hence need of spred operator
            // which will spread older elements of the array into newer one and added extra new value to the array
            setCheckBoxValue([...checkboxValue, event.target.value])
        } else {
            // No nee to use spread operator because Filter will return a new array with all the elements except the one which is unchecked
            // Filter Function taes anoter function as an argument or we can call it as Call back 
            // which iterate over each elemnet o teh array an filter function expect that the callback func returns a true or false value
            // based upon this value it will decide whether to keep the element in the new array or not
            setCheckBoxValue(checkboxValue.filter((item) => { return item !== event.target.value }))
        }
    }

    return (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
            <input type="checkbox" id="php" value="php" onChange={(event) => { handleCheckboxChange(event) }} />
            <label htmlFor="php">PHP</label>

            <input type="checkbox" id="python" value="python" onChange={(event) => { handleCheckboxChange(event) }} />
            <label htmlFor="python">Python</label>

            <input type="checkbox" id="javascript" value="javascript" onChange={(event) => { handleCheckboxChange(event) }} />
            <label htmlFor="javascript">JavaScript</label>

            <input type="checkbox" id="java" value="java" onChange={(event) => { handleCheckboxChange(event) }} />
            <label htmlFor="java">Java</label>
            <hr />
            <br />
            <h3>Selected Checkbox Values:</h3>
            <ul>
                {checkboxValue.length > 0 ? checkboxValue.join(', ') : "None selected"}
            </ul>
        </div>
    )

}

export default CheckboxValueDisplay;