import { useState } from 'react';

export default function StateReactUnderstanding() {
    // State is a special React object that allows you to manage and track data that can change over time. It enables components
    //  to be dynamic and interactive by allowing them to respond to user actions, API responses, or other events. 
    // When the state of a component changes, React automatically re-renders the component and updates the UI to reflect the new state.
    const [count, updateCounter] = useState(0);
    const [name, updateName] = useState("Aditya Jain");
    const [displaycomponent, setDisplayComponent] = useState(true);
    return (
        <div>
            <h1>State React Understanding</h1>
            <h2>Counter Value {count}</h2>
            <h2>Name: {name}</h2>
            <button onClick={() => updateCounter(count + 1)}>Increment Counter</button>
            <button onClick={() => updateCounter(count - 1)}>Decrement Counter</button>
            <button onClick={() => updateName("Payal Jain")}>Change Name </button>
            <button onClick={() => setDisplayComponent(!displaycomponent)}>Toggle Display Component</button>
            {
                displaycomponent ? <p>This is the component that will be toggled.</p>
                    : <p>The component is hidden.</p>
            }
        </div>
    )
}