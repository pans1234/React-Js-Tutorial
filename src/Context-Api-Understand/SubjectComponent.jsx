import { useContext } from 'react'
import { SubjectContext } from './ContextData'
export default function SubjectComponent() {
    const subjectctx = useContext(SubjectContext)
    return (
        <div style={{ backgroundColor: 'red', padding: "10px" }}>
            <h1>Subject Componenet !</h1>
            <h2>Subject Is: {subjectctx}</h2>
        </div>
    )
}