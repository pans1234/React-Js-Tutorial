import UsreDataPropsLoopJsx from './UserData-Props-in-Loops'

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

    // return (
    //     <>
    //         <h1>Looping Over the userData</h1>
    //         <table border="1">
    //             <thead>
    //                 <tr>
    //                     <td>Id</td>
    //                     <td>Name</td>
    //                     <td>Email</td>
    //                     <td>Age</td>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     userData.map((obj) => {
    //                         return (
    //                             <tr key={obj.id}>
    //                                 <td>{obj.id}</td>
    //                                 <td>{obj.name}</td>
    //                                 <td>{obj.email}</td>
    //                                 <td>{obj.age}</td>
    //                             </tr>
    //                         )
    //                     })
    //                 }
    //             </tbody>
    //         </table>

    //     </>
    // )

    return (
        // Passing the userObj each tiem to an userComponet and component s looping over it 
        // 2. remember that map function takes an call back function which will be iterate over an obj or element
        // 3. while iterating esure if use {} braces for an call back function you definately use return satemet else never nothing ahppensed
        // 4. in signle line n need to use of return it return by default
        // 5. throuh props sending data
        <>
            <h2>Dynamic rendering of an Component iterate over Loop while Data passes through Props</h2>
            {
                userData.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <UsreDataPropsLoopJsx userObj={obj} />
                        </div>
                    )
                })
            }
        </>
    )
}