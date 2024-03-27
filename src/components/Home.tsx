import React from "react"
import Logo from "../components/assets/logo.png"


function Home() {
    React.useEffect(() => {
        console.log("The Home Page has mounted!")
    }, [])


    return (
        <section id="collage" className="hero is-link is-fullheight-with-navbar is-link">
            <div className="hero-body has-text-centered has-background-white">
                <div className="container">
                    <img src={Logo} alt="Logo" />
                    <h2 className='has-text-dark is-size-3'> Unlock the Melody: <br>
                    </br>The Open-Source Music Library</h2>
                </div>
            </div>
        </section>
    )
}

export default Home
