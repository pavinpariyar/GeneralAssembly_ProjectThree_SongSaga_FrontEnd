import { Link } from "react-router-dom"
import { ISong } from "../interfaces/songs"

function SongCards({ _id, name, artist, album, albumCover }: ISong) {
    return (
        <div className="column is-one-quarter-desktop is-one-third-tablet">
            <Link to={`/songs/${_id}`}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={albumCover} alt="Album cover" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">{artist}</p>
                            </div>
                        </div>
                        <div className="content">
                            {album}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SongCards