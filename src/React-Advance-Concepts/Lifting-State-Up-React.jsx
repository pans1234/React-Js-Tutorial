import { useState } from "react"

function SearchInput({ query, onChangeQuery }) {
    return (
        <>
            <p>SearchInput</p>
            <input type="text" placeholder="Search Here ..." onChange={(event) => onChangeQuery(event.target.value)} value={query} />
        </>
    )
}

function TopicList({ query }) {
    const ITEMS = ['React', 'useRef', 'useTransition', 'forwardRef', 'Derived State'];
    const matches = ITEMS.filter((item) => {
        return item?.toLowerCase().includes(query?.toLowerCase())
    })
    return (
        <>
            <p>TopicList</p>
            <ul>
                {
                    matches.length > 0 ?
                        matches.map((i, index) => {
                            return <li key={index}>{i}</li>
                        })
                        :
                        <li>No Mached Data Found</li>
                }
            </ul>
        </>
    )
}


export default function LiftingStateUpParent() {
    const [query, setQuery] = useState();

    return (
        <>
            <h1>LiftingStateUp Understanding!</h1>
            <SearchInput query={query} onChangeQuery={setQuery} />
            <TopicList query={query} />
        </>
    )
}