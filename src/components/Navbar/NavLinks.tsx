import { Link } from "react-router-dom"

const NavLinks = () => {
    return (
        <ul className="text-white font-semibold flex gap-4">
            <li className="cursor-poiner">Prices</li>
            <li className="cursor-poiner">Abouts</li>
            <li className="cursor-poiner"> <Link to={'/login'}>Login</Link></li>
        </ul>
    )
}

export default NavLinks
