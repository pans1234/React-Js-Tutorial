import { Routes, Route } from 'react-router'
import NavbarLinks from './navbar'
export default function RoutesReact() {
    return (
        <>
            <NavbarLinks />
            <Routes>
                {/* Can Make the Home pgae Component call it inside the element  */}
                <Route path="/" element={<h1>Home Page Load</h1>} />
                <Route path="/about" element={<h1>About Page Load</h1>} />
                <Route path="/contact" element={<h1>Contact Page Load</h1>} />
            </Routes>
        </>
    )
}