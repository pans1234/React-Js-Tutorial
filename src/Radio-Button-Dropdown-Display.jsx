import { useState } from 'react'
function RadioButtonDropdownDisplay() {
    const [gender, setGender] = useState("male")
    const [optionSelected, setOptionSelected] = useState("delhi");
    return (
        <>
            <h1> Radio Btton how it works</h1>
            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(event) => setGender(event.target.value)} />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(event) => setGender(event.target.value)} />
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(event) => setGender(event.target.value)} />
            <label htmlFor="other">Other</label>
            <br />
            <br />
            <h2> Seleceted Gender is: {gender}</h2>
            <hr />
            <h1>Dropdown Display</h1>
            <select value={optionSelected} onChange={(event) => setOptionSelected(event.target.value)}>
                <option value="delhi">Delhi</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="kolkata">Kolkata</option>
            </select>
            <h2>DIsplay Selected value: {optionSelected}</h2>
        </>
    )
}

export default RadioButtonDropdownDisplay