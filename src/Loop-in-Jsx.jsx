export const UnderstandLoop = () => {

    const userData = [
        {
            name: "Payal Jain",
            age: 25,
            email: "pay@test.com",
            id: 1

        },
        {
            name: "Aditya Jain",
            age: 28,
            email: "adi@test.com",
            id: 2

        },
        {
            name: "Nilam Jain",
            age: 20,
            email: "nilu@test.com",
            id: 3

        }
    ]

    return (
        <>
            <h1>Looping Over the userData</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((obj) => {
                            return (
                                <tr key={obj.id}>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}