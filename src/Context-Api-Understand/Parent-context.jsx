import { useState } from 'react'
import CollegeComponent from './College'
import { SubjectContext } from './ContextData'
export default function ParentContextAPI() {
    const [sub, setSub] = useState('');
    return (
        <div style={{ backgroundColor: 'yellow', padding: "10px" }}>
            <SubjectContext.Provider value={sub}>
                <select value={sub} onChange={(e) => setSub(e.target.value)}>
                    <option value="">Select Subjects</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                </select>
                <button onClick={() => setSub('')}>Clear Subject</button>
                <h1>Context API!</h1>
                <CollegeComponent />
            </SubjectContext.Provider>
        </div>
    )
}