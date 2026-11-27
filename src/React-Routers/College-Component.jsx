import { Link, Outlet } from "react-router"

export default function College() {
    return (
        <>
            <h1>College Component</h1>
            <ul>
                {/* Below is the Code to show Student Nav Bar */}
                {/* <li>
                    <Link to="student">Student</Link>
                </li> */}
                {/* 1. Below s teh code where i want taht : Child Routes needs to be Outleted
                    2.I wnat to render the student Route By default whenver College Route Opens
                    3. i dont want first College Route Open and then Clicking on whic Studnet open i want by defaut open Studnet route
                    4. use just Index word in the route and remove the path from it */}
                <li>
                    <Link index="true" to="">Student</Link>
                </li>
                <li>
                    <Link to="department">Departent</Link>
                </li>
                <li>
                    <Link to="stu-detail">Students Details</Link>
                </li>
            </ul>
            <button><Link to="/">Go Back To Home</Link></button>
            <Outlet />
        </>
    )
}