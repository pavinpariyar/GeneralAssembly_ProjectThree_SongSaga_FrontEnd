import React from "react"
import Logo from "../assets/image/logo.png"


function Home() {
    React.useEffect(() => {
        console.log("The Home Page has mounted!")
    }, [])


    return (
        <section id="collage" className="hero is-link is-fullheight-with-navbar is-link">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <img src={Logo} alt="Logo" />
                    
                </div>
            </div>
        </section>
    )
}

export default Home
