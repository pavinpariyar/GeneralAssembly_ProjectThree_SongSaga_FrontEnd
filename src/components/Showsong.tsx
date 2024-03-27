import React, { SyntheticEvent, useState } from "react"; // Importing necessary modules from React
import { useNavigate, useParams } from "react-router-dom"; // Importing hooks from React Router
import { ISong } from "../interfaces/songs"; // Importing ISong interface
import YouTube, { YouTubeProps } from "react-youtube"; // Importing YouTube component and its props
import axios from 'axios'; // Importing Axios for HTTP requests
import { IUser } from "../interfaces/user"; // Importing IUser interface

function ShowSong({ user }: { user: null | IUser }) { // Functional component ShowSong receiving user prop

    const [song, updateSong] = React.useState<ISong | null>(null); // State for song data
    const [isActive, setIsActive] = useState(true); // State for modal activation

    const { songId } = useParams(); // Getting songId from URL parameters
    const navigate = useNavigate(); // Initializing the useNavigate hook for navigation

    const handleToggle = () => { // Function to handle modal toggle
        setIsActive(false); // Deactivating the modal
        navigate('/songs'); // Navigating to the '/songs' route
    };

    React.useEffect(() => { // Effect hook to fetch song data
        async function fetchSong() {
            try {
                const resp = await fetch(`/api/songs/${songId}`); // Fetching song data from API
                const SongsData = await resp.json(); // Parsing response data
                updateSong(SongsData); // Updating song state with fetched data
            } catch (e) {
                // Handle error
            }
        }
        fetchSong();
    }, [songId]); // Added songId as a dependency

    async function deleteSong(e: SyntheticEvent) { // Function to handle song deletion
        try {
            const token = localStorage.getItem('token'); // Getting token from localStorage
            await axios.delete('/api/songs/' + songId, { // Sending DELETE request to delete song
                headers: { Authorization: `Bearer ${token}` } // Attaching authorization token to request headers
            });
            navigate('/songs'); // Navigating to the '/songs' route after successful deletion
        } catch (e: any) {
            console.log(e.response.data); // Logging error message if deletion fails
        }
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => { // Function to handle YouTube player readiness
        event.target.pauseVideo(); // Pausing the video when player is ready
    };

    const opts: YouTubeProps['opts'] = { // Options for YouTube player
        height: '390', // Player height
        width: '640', // Player width
        playerVars: {
            autoplay: 2, //? 1 autoplays when modal loads, 2 doesn't.
        },
    };

    console.log(user, user?.id); // Logging user data to console
    console.log(song); // Logging song data to console
    console.log('song link...', song?.songLink); // Logging song link to console
    console.log('user is ', user?._id); // Logging user ID to console

    const youtubeID = song?.songLink?.split('v=')[1]; // Extracting YouTube video ID from song link

    return (
        <section className="section">
            {/* {isActive && */} //? Able to close to the modal without this line of code.
            <div className="modal is-active"> {/* Modal for displaying song details */}
                <div className="modal-background" onClick={handleToggle}></div> {/* Background to close modal */}
                <div className="modal-card tempTag"> {/* Modal card */}
                    <header className="modal-card-head"> {/* Modal header */}
                        <p className="modal-card-title">{song?.name}</p> {/* Song name */}
                        <button className="delete" aria-label="close" onClick={handleToggle}></button> {/* Button to close modal */}
                    </header>
                    <section className="modal-card-body px-3"> {/* Modal body */}
                        <div className="container"> {/* Container for modal content */}
                            <div className="columns"> {/* Columns for layout */}
                                <div className="column is-one-third"> {/* Column for album cover */}
                                    <figure className="image is-1by1"> {/* Figure for album cover */}
                                        <img src={song?.albumCover} alt="album cover image" /> {/* Album cover image */}
                                    </figure>
                                </div>
                                <div className="column"> {/* Column for song details */}
                                    <h1 className="title has-text-centered">{song?.artist}</h1> {/* Artist name */}
                                    <p className="subtitle has-text-centered">{song?.album}</p> {/* Album name */}
                                    <div>
                                        {/* Use songLink for the YouTube video ID */}
                                        <YouTube videoId={youtubeID} opts={opts} onReady={onPlayerReady} /> {/* YouTube player */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot"> {/* Modal footer */}
                        <div className="buttons"> {/* Buttons section */}
                            {song && (user?._id === song.user) && <button className="button is-danger" onClick={deleteSong}>Delete Song!</button>} {/* Delete song button */}
                        </div>
                    </footer>
                </div>
            </div>
            {/* } */}
        </section>
    );
}

export default ShowSong; // Exporting the ShowSong component