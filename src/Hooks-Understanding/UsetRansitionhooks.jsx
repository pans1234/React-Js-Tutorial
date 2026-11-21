import { useState, useTransition } from "react"

function Profile() {
    return (
        <h2>Hey From Profile Tab</h2>
    )
}

function DeepAnalysis() {
    return (
        <h2>Hey From DeepAnalysis Tab</h2>
    )
}

export default function UseTransitionHookUnderstanding() {
    const [tab, setTab] = useState("profile");
    const [isPending, setTransition] = useTransition(false);

    const handleTab = (event) => {
        let tabValue = event?.target.value;
        console.log("selected tab===>", { tabValue })
        setTransition(async () => {
            await new Promise((res, rej) => {
                setTimeout(res, 2000);
            });
            setTab(tabValue);
        })
    }

    return (
        <>
            <h1>UseTransitionHook Understanding!</h1>
            <div>
                <button value="profile" onClick={(event) => handleTab(event)}>Profile</button>
                <button value="deepanalysis" onClick={(event) => handleTab(event)}>DeepAnalysis</button>
            </div>
            <div>
                {
                    isPending && <p style={{ opacity: 0.6 }}>Loading content...</p>
                }
                <hr />
                {tab === 'profile' && <Profile />}
                {tab === 'deepanalysis' && <DeepAnalysis />}
            </div>

        </>
    )
}