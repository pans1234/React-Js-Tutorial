// let count = 0;

function ImpurePureComponent() {
    return (
        <>
            <h1>ImPure Componets Understandong !</h1>
            {/* Result will wbe in appropriate beacause teh variable is declared ouside hence this component is IMPUR ECOMPONNET NIT GETINBG DESIRED RESULT */}
            <Counter />
            <Counter />
        </>
    )
}


export default function PureFunction() {
    let count = 0
    return (
        <>
            <h1>Pure Componets Understandong !</h1>
            {/* Result will wbe in appropriate beacause teh variable is declared ouside hence this component is IMPUR ECOMPONNET NIT GETINBG DESIRED RESULT */}
            <Counter count={count + 1} />
            <Counter count={count + 2} />
        </>
    )
}

const Counter = ({ count }) => {
    // count = count + 1;
    return (
        <h4>Count Value: {count}</h4>
    )
}