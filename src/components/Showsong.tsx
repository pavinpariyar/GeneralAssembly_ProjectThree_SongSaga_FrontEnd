import React, { SyntheticEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ISong } from "../interfaces/songs";
import YouTube, { YouTubeProps } from "react-youtube";
import axios from 'axios';
import { IUser } from "../interfaces/user";

function ShowSong({ user }: { user: null | IUser }) {

    const [song, updateSong] = React.useState<ISong | null>(null);
    const [isActive, setIsActive] = useState(true);

    const { songId } = useParams();
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsActive(false);
        navigate('/songs'); // Optionally, navigate to another page when closing modal
    };

    React.useEffect(() => {
        async function fetchSong() {
            try {
                const resp = await fetch(`/api/songs/${songId}`);
                const SongsData = await resp.json();
                updateSong(SongsData);
            } catch (e) {
                // Handle error
            }
        }
        fetchSong();
    }, [songId]); // Added songId as a dependency

    async function deleteSong(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem('token');
            await axios.delete('/api/songs/' + songId, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate('/songs');
        } catch (e: any) {
            console.log(e.response.data);
        }
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 2, //? 1 autoplays when modal loads, 2 doesn't. 
        },
    };

    console.log(user, user?.id)
    console.log(song)
    console.log('song link...', song?.songLink)
    console.log('user is ', user?._id)

    const youtubeID = song?.songLink?.split('v=')[1];

    return (
        <section className="section">
            {/* {isActive && */} //? Able to close to the modal without this line of code. 
                <div className="modal is-active">
                    <div className="modal-background" onClick={handleToggle}></div>
                    <div className="modal-card tempTag">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{song?.name}</p>
                            <button className="delete" aria-label="close" onClick={handleToggle}></button>
                        </header>
                        <section className="modal-card-body px-3">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-one-third">
                                        <figure className="image is-1by1">
                                            <img src={song?.albumCover} alt="album cover image" />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <h1 className="title has-text-centered">{song?.artist}</h1>
                                        <p className="subtitle has-text-centered">{song?.album}</p>
                                        <div>
                                            {/* Use songLink for the YouTube video ID */}
                                            <YouTube videoId={youtubeID} opts={opts} onReady={onPlayerReady} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <div className="buttons">
                                {song && (user?._id === song.user) && <button className="button is-danger" onClick={deleteSong}>Delete Song!</button>}
                            </div>
                        </footer>
                    </div>
                </div>
            {/* } */}
        </section>
    );
}

export default ShowSong;
