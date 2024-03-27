import { Link, useNavigate } from "react-router-dom" // Importing necessary modules from React Router
import { IUser } from "../interfaces/user" // Importing IUser interface

interface NavbarProps { // Defining props interface for Navbar component
    user: null | IUser, // User data or null
    setUser: Function // Function to set user data
}

function Navbar({ user, setUser }: NavbarProps) { // Functional component Navbar receiving props
    console.log("user in the navbar: ", user) // Logging user data to the console
    const navigate = useNavigate() // Initializing the useNavigate hook for navigation

    function logout() { // Function to handle user logout
        localStorage.removeItem("token") // Removing token from localStorage
        setUser(null) // Setting user data to null
        navigate('/home') // Navigating to the '/home' route after logout
    }

    return (
        <>
            <header> {/* Header section */}
                <nav className="navbarColor"> {/* Navbar with custom color */}
                    <div className="container"> {/* Container for navbar content */}
                        <div className="navbar-brand"> {/* Navbar brand section */}
                            <Link to="/home" className="navbar-item has-text-white"> {/* Home link */}
                                Home
                            </Link>
                            <Link to="/songs" className="navbar-item has-text-white"> {/* Music Library link */}
                                Music Library
                            </Link>
                            {/* // ! Show and hide appropriate routes for member/visitor */}
                            {!user && <Link to="/signup" className="navbar-item has-text-white"> {/* Signup link */}
                                Signup
                            </Link>}
                            {!user && <Link to="/login" className="navbar-item has-text-white"> {/* Login link */}
                                Login
                            </Link>}
                            {user && <Link to="/createsong" className="navbar-item has-text-white"> {/* Create a Song link */}
                                Create a Song
                            </Link>}
                            {user && <button onClick={logout} className="button navbar-item is-ghost">Logout</button>} {/* Logout button */}
                            <h2 className='navbar-end has-text-light is-size-3 px-2'>The Open-Source Music Library</h2> {/* Title */}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar // Exporting the Navbar component