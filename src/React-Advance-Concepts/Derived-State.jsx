import { useState } from "react"

export default function DerivedState() {
    const [usersArr, setUserArr] = useState([]);
    const [singleUser, setSingleUser] = useState('');
    const addUserFromInput = (userName) => {
        let enteredUserName = userName;
        // If you write Below code without using [] then entre Array become an character 
        // array not string array 
        // and hence it will give 5 as total User if you type Payal as input nox and last Character will be : l
        // setUserArr(...usersArr, enteredUserName)
        // if you want the Payal consider as one single User then use [] and make the 
        // entire string as one elemnet of teh array
        setUserArr([...usersArr, enteredUserName])
    }

    const totalUser = usersArr.length;
    const lastUserName = usersArr[usersArr.length - 1]
    // Derived State as Mentioned Above : What Ctually Happens anything in react happens 
    // through teh component 
    // and hence if if you manipuate the value of any variable taht can be possible but taht 
    // value of vbriable will never be reflecetde in the UI beacause to reflect the variable teh Component needs to be reload or re-rende
    // thus we use useStae() which internally tell teh React taht State may change thus Re-render teh compoent
    // derived State are those these are variable whose Valeu may change or depened as per change in teh Sate
    // taht menas their values are determined by teh value of state and hence derived State
    return (
        <>
            <h1>Derived state Understanding!</h1>
            <input type="text" placeholder="Enter Name of user" onChange={(event) => setSingleUser(event.target.value)}></input>
            <button onClick={() => addUserFromInput(singleUser)}>Add User in Arr</button>
            <h2>Total user Count: {totalUser}</h2>
            <h2>Last user Name: {lastUserName}</h2>

        </>
    )
}