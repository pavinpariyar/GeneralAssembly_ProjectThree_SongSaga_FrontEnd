import React from "react" // Importing React library
import Logo from "../assets/image/logo.png" // Importing logo image

function Home() {
    React.useEffect(() => { // Using useEffect hook for component lifecycle management
        console.log("The Home Page has mounted!") // Logging a message when the Home page is mounted
    }, [])

    return (
        <section id="collage" className="hero is-link is-fullheight-with-navbar is-link"> {/* Rendering a section with hero styling */}
            <div className="hero-body has-text-centered"> {/* Hero body with centered text */}
                <div className="container"> {/* Container for content */}
                    <img src={Logo} alt="Logo" /> {/* Rendering the logo image */}
                </div>
            </div>
        </section>
    )
}

export default Home // Exporting the Home component