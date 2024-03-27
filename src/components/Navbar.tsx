import { Link, useNavigate } from "react-router-dom"
import { IUser } from "../interfaces/user"

interface NavbarProps {
    user: null | IUser,
    setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {
    console.log("user in the navbar: ", user)
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem("token")
        setUser(null)
        navigate('/home')
    }

    return (
        <>
            <header>
                <nav className="navbarColor">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/home" className="navbar-item has-text-white">
                                Home
                            </Link>
                            <Link to="/songs" className="navbar-item has-text-white">
                                Music Library
                            </Link>
                            {/* // ! Show and hide appropriate routes for member/visitor */}
                            {!user && <Link to="/signup" className="navbar-item has-text-white">
                                Signup
                            </Link>}
                            {!user && <Link to="/login" className="navbar-item has-text-white">
                                Login
                            </Link>}
                            {user && <Link to="/createsong" className="navbar-item has-text-white">
                                Create a Song
                            </Link>}
                            {user && <button onClick={logout} className="button navbar-item is-ghost">Logout</button>}
                            <h2 className='navbar-end has-text-light is-size-3 px-2'>The Open-Source Music Library</h2>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar