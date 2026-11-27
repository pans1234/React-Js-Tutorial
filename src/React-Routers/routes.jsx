import { Routes, Route } from 'react-router'
import NavbarLinks from './navbar'
import College from './College-Component'
export default function RoutesReact() {
    return (
        <>
            {/* <NavbarLinks /> */}
            <Routes>
                {/* Can Make the Home pgae Component call it inside the element  
                    2. This is when over every componnet i wnat my Nav Bar but when i nav Bar will be Conditional
                    then i need to speicy for which route shoudl come hence need to remove 
                    <NavbarLinks/> at teh Top make it as an elemnet inside Routes*/}
                {/* <Route path="/" element={<h1>Home Page Load</h1>} />
                <Route path="/About" element={<h1>About Page Load</h1>} />
                <Route path="/Contact" element={<h1>Contact Page Load</h1>} /> */}
                <Route element={<NavbarLinks />}>
                    <Route path="/" element={<h1>Home Page Load</h1>} />
                    <Route path="/About" element={<h1>About Page Load</h1>} />
                    <Route path="/Contact" element={<h1>Contact Page Load</h1>} />
                </Route>
                <Route path="/College" element={<College />} >
                    <Route path="" element={<h1>Student Page Load</h1>} />
                    <Route path="department" element={<h1>Department Page Load</h1>} />
                    <Route path="stu-detail" element={<h1>Student Details Page Load</h1>} />

                </Route>

            </Routes>
        </>
    )
}