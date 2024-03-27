import React from "react"
import Logo from '../photos/logo.png'

function Home() {
    React.useEffect(() => {
        console.log("The Home Page has mounted!")
    }, [])


    return (
        <section className="hero is-link is-fullheight-with-navbar is-link">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <img src={Logo} alt="Logo" />
                    <h2> Unlock the Melody: <br>
                    </br>The Open-Source Music Library</h2>

                </div>
            </div>
        </section>
    )
}

export default Home
