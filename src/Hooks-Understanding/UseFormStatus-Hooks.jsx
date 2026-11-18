import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}

function UseFormStatusHooks() {
    const handleFormSubmit = async () => {
        console.log("handleFormSubmit======")
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 5000)
        }).then(() => {
            console.log("Prmise Runs Success fully an resolved")
        }).catch(() => {
            return console.error("some error occured while resolving Promise")
        })
    }

    return (
        <>
            <form action={() => handleFormSubmit()} >
                <input type="text" placeholder="Enter Name" />
                <br /><br />
                <input type="password" placeholder="Enter Password" />
                <br /><br />

                {/* <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button> */}
                {/* This will not read Form status because yu are saying to read teh form which is not even rendered yet at the top pf component nad it render form after ong
                hence it can be give actual result or esired result 
                insted f use chilecompnent and shif the form Status inside it wil first rendre the form then give its status earlier what happnes you want to know teh status 
                of te form which is not even rendered yet */}
                <SubmitButton />
            </form>
        </>
    )
}

export default UseFormStatusHooks;