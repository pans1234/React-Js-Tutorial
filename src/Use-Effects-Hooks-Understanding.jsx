import { useEffect, useState } from 'react'

function UseEffectsHooks() {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        handleComponentCallOnce();
    }, [])

    // useEffect(() => {
    //     handleComponentCallOnce();
    // }, [count,state2])

    // useEffect(() => {
    //     handleComponentCallOnce();
    // }, [props1,props2])

    // useEffect(() => {
    //     handleComponentCallOnce();
    // }) cal every time whenever the Compoennt re renders

    function handleComponentCallOnce() {
        console.log("This Should be Called only once===> handleComponentCallOnce");
    }
    // handleComponentCallOnce();
    // calling here wil automatically multiple times because whenever the stae change the 
    // component re render as soon as it re renders the function again calls not only once if you wnat to call it only at once then
    // we need to use useEffects(), where dependecy array will be [] and will call only 
    // if you wnat certain function or side effercts must be called only if tehre is chage in state or in props
    // multiple useEffects can be used in one component may be work independenltly
    return (
        <>
            <h1>Count Vaule: {count}</h1>
            <button onClick={() => setCounter(count + 1)}>Increase Counter Button</button>
        </>
    )
}

export default UseEffectsHooks;