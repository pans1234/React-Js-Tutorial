export function ReactJsxTutorial() {
    const userName = "Payal jain React"
    let x = 90;
    let y = 10;
    let userobj = {
        name: "Payal jain",
        age: 22,
        email: "pay@test.com"
    };
    let userarray = ["Pyton", "Java", "C++", "C#", "JavaScript", "ReactJs"];
    function customoperation(a, b, operation) {
        if (operation === "add") {
            return a + b;
        } else if (operation === "subtract") {
            return a - b;
        } else if (operation === "multiply") {
            return a * b;
        } else if (operation === "divide") {
            return a / b;
        } else {
            return "Invalid operation";
        }
    }

    return (
        <div>
            <h1>{userName} JSX Undertanding!</h1>
            <h2>{x} + {y} = {x + y}</h2>
            <h3>{userobj.name}, {userobj.age}, {userobj.email}</h3>
            <h4>My Favourite Programming Languages are:</h4>
            <ul>
                {userarray.map((lang, index) => (
                    <li key={index}>{lang}</li>
                ))}
            </ul>
            <h4>Custom Operation:</h4>
            <p>{x} + {y} = {customoperation(x, y, "add")}</p>
            <p>{x} - {y} = {customoperation(x, y, "subtract")}</p>
            <p>{x} * {y} = {customoperation(x, y, "multiply")}</p>
            <p>{x} / {y} = {customoperation(x, y, "divide")}</p>
        </div>
    )
}