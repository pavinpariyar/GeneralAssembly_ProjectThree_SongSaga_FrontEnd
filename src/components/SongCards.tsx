import { Link } from "react-router-dom"
import { ISong } from "../interfaces/songs"


function SongCards({ _id, name, artist, album, setIsActive }: ISong) {
    return <div className="column is-one-quarter-desktop is-one-third-tablet">
        {/* <Link to={`/song/${_id}`}> */}
        <div className="card" onClick={() => setIsActive(true)}>
            <div className="card-header">
                <div className="card-header-title">{name}</div>
            </div>
            <div className="card-image">
                <figure className="image image-is-1by1">
                    <span>{artist}</span><br />
                    <span>{album}</span>
                </figure>
            </div>
            <div className="card-content">
                {/* <h5>{year}</h5> */}
            </div>
        </div>
        {/* </Link> */}
    </div>
}

export default SongCards