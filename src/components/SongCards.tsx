import { Link } from "react-router-dom"
import { ISong } from "../interfaces/songs"

function SongCards({ _id, name, artist, album, albumCover, genre }: ISong) {

    return (<div className="column is-one-quarter-desktop is-one-third-tablet">
        <Link to={`/songs/${_id}`}>
            <div className="card px-4 py-2">
                <div className="card-image">
                    <h1 className="title is-4 has-text-centered">{name}</h1>
                    <figure className="image is-4by3">
                        <img src={albumCover} alt="Album cover" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content has-text-centered">
                            <h2 className="title is-5">{artist}</h2>
                            <h3 className="subtitle is-5">{album}</h3>
                        </div>
                    </div>
                    <div className="content">
                        {genre}
                    </div>
                </div>
            </div>
        </Link>
    </div>
    );
}

export default SongCards