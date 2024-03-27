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
                <nav className="navbar is-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/home" className="navbar-item">
                                Home
                            </Link>
                            <Link to="/songs" className="navbar-item">
                                Music Library
                            </Link>
                            {/* // ! Show and hide appropriate routes for member/visitor */}
                            {!user && <Link to="/signup" className="navbar-item">
                                Signup
                            </Link>}
                            {!user && <Link to="/login" className="navbar-item">
                                Login
                            </Link>}
                            {user && <Link to="/createsong" className="navbar-item">
                                Create a Song
                            </Link>}
                            {user && <button onClick={logout} className="button navbar-item is-ghost">Logout</button>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar