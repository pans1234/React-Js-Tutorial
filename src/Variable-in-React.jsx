export const VariableInReact = () => {
    let name = "Payal jain";
    const setVariableNameAsFunc = (paramsName) => {
        name = paramsName;
        console.log("Changed Name ===>", name)
        // by doing this we can think thatit should Ideally Chane the name variable in my UI also but actually it does not do this 
        // insted it chage only internally and not reflected in UI
        // because to change in UI it is required to re render the component onec variable is changed and hence Recat special feature came 
        // that is State which is special type container to store teh data just like variable 
    }
    return (
        <div>
            <h1>Hello, {name}! From variable in React Component</h1>
            <button onClick={() => setVariableNameAsFunc("Aditya Jain")}> Change Variable Name </button>
        </div>
    );
}