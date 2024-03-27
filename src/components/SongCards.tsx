import { Link } from "react-router-dom" // Importing Link component from React Router
import { ISong } from "../interfaces/songs" // Importing ISong interface

function SongCards({ _id, name, artist, album, albumCover, genre }: ISong) { // Functional component SongCards receiving song data as props
    return (
        <div className="column is-one-quarter-desktop is-one-third-tablet"> {/* Column for displaying song card */}
            <Link to={`/songs/${_id}`}> {/* Link to individual song page */}
                <div className="card"> {/* Card for displaying song details */}
                    <div className="card-image"> {/* Card image section */}
                        <figure className="image is-4by3"> {/* Figure for album cover */}
                            <img src={albumCover} alt="Album cover" /> {/* Album cover image */}
                        </figure>
                    </div>
                    <div className="card-content"> {/* Card content section */}
                        <div className="media"> {/* Media section */}
                            <div className="media-content"> {/* Media content */}
                                <p className="title has-text-centered">{name}</p> {/* Song name */}
                                <p className="subtitle is-6">{artist}</p> {/* Artist name */}
                            </div>
                        </div>
                        <div className="content"> {/* Content section */}
                            {album} {/* Album name */}
                            <br></br> {/* Line break */}
                            {genre} {/* Genre */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SongCards // Exporting the SongCards component