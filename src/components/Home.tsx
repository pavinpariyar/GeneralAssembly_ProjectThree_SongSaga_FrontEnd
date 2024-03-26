import React from "react"

function Home() {
    React.useEffect(() => {
        console.log("The Home Page has mounted!")
    }, [])


    return (
        <section className="hero is-link is-fullheight-with-navbar is-link">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <p className="title">SongSaga</p>
                    <h1>The Open-Source Music Library</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R_rUYuFtNO4?si=cO-zWlQpFh9yVzno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Home
