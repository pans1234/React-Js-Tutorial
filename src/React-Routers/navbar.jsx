import { Link } from 'react-router'
export default function NavbarLinks() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/College">College</Link>
                </li>
            </ul>
        </div>
    )
}