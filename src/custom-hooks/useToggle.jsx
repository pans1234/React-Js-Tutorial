import { useState } from "react";

export default function useToggleHooks(defaultValue) {
    const [tgVal, setVal] = useState(defaultValue);
    function toggleValue(val) {
        console.log("================> type of valll", { val }, typeof (val))
        // if no defaut value has passed
        if (typeof val !== 'boolean') {
            setVal(!tgVal)
            console.log("========> IF consition", tgVal)
        } else {
            setVal(val)
            console.log("========> ELSE consition", tgVal)

        }
    }
    return [tgVal, toggleValue]
}