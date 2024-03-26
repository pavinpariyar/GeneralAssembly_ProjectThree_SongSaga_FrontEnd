import { Link } from "react-router-dom"
import { ISong } from "../interfaces/songs"

function SongCards({ _id, name, artist, album, albumCover }: ISong) {
    return <div className="column is-one-quarter-desktop is-one-third-tablet">
        <Link to={`/songs/${_id}`}>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title is-centered">{name}</div>
                </div>
                <div className="card-image">
                    <div className="card-content">
                        <figure className="image image-is-1by1">
                            <img src={albumCover} alt="album cover image" />
                        </figure>
                    </div>
                    <span>{artist}</span><br />
                    <span>{album}</span>
                </div>
            </div>
        </Link>
    </div>
}

export default SongCards