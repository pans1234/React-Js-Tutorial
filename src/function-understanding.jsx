function callFun() {
    console.log("Function called FROM OUTSIDEEEEEEEEEEEEE");
}

function FuncReactUnderstanding() {

    const fruitname = (fruitnamevar) => {
        console.log(fruitnamevar);
    }

    return (
        <>
            <button onClick={callFun}>Calling Function</button>
            <br />
            <button onClick={() => fruitname("banana")}>Calling Function with Parameter</button>
        </>
    );

}

export default FuncReactUnderstanding;