// Props are used to pass data from parent component to child component. Props are read-only, 
// which means that a child component cannot modify the props it receives from its parent. 
// Props can be of any data type, including strings, numbers, arrays, objects, and functions. 
// In React, props are passed to a component as an object, 
// and the properties of that object can be accessed using dot notation.  
const PropsReactUnderstanding = ({ userList }) => {
    console.log("PropsReactUnderstanding data ===>", userList)
    return (
        <div>
            <h1>Props React Understanding</h1>
            <p>Name: {userList[0].name}</p>
            <p>Age: {userList[0].age}</p>
        </div>
    )
}

export default PropsReactUnderstanding