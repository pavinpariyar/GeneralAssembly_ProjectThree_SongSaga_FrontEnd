import React, { SyntheticEvent, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ISong } from "../interfaces/songs"
import SongCards from "./SongCards"
import { IUser } from "../interfaces/user"
import axios from "axios"
import YouTube, { YouTubeProps } from "react-youtube"

function ShowSong({ user }: { user: null | IUser }) {

    const [song, updateSong] = React.useState<ISong | null>(null)
    const { songId } = useParams()
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(true)

    const handleToggle = () => {
        setIsActive(false);
        navigate('/songs'); // Optionally, navigate to another page when closing modal
    }

    React.useEffect(() => {
        console.log("The song page has mounted")
    }, [])


    React.useEffect(() => {
        async function fetchSong() {
            try {
                const resp = await fetch(`/api/songs/${songId}`)
                const SongsData = await resp.json()
                updateSong(SongsData)
                console.log(SongsData)
            }
            catch (e) {
            }
        }
        fetchSong()
    }, [])

    async function deleteSong(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem('token')
            await axios.delete('/api/songs/' + songId, {
                headers: { Authorization: `Bearer ${token}` }
            })
            navigate('/songs')
        } catch (e: any) {
            console.log(e.response.data)
        }
    }
    console.log(user)
    console.log(song)

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }


    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    return (
        <section className="section">
            {isActive &&
                <div className="modal is-active">
                    <div className="modal-background" onClick={handleToggle}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{song?.name}</p>
                            <button className="delete" aria-label="close" onClick={handleToggle}></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-one-third">
                                        <figure className="image is-1by1">
                                            <img src={song?.albumCover} alt="album cover image" />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <h1 className="title">{song?.artist}</h1>
                                        {/* <p className="subtitle">{song?.artist}</p> */}
                                        <p className="subtitle">{song?.album}</p>
                                        <div>
                                            <YouTube videoId='_1By7t5fd6I' opts={opts} onReady={onPlayerReady} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <div className="buttons">
                                {song && (user._id === song.user) && <button className="button is-danger" onClick={deleteSong}>Delete Song!</button>}
                            </div>
                        </footer>
                    </div>
                </div>
            }
        </section>
    )
}

export default ShowSong