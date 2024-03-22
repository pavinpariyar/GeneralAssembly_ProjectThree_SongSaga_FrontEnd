import React from "react"
import SongCards from "./SongCards"
import { ISong } from "../interfaces/songs"

type Songs = null | Array<ISong>

function SongList() {

    const [songs, setSongs] = React.useState<Songs>(null)

    React.useEffect(() => {
        async function fetchSongs() {
            const resp = await fetch('/api/songs')
            const data = await resp.json()
            setSongs(data)
        }
        fetchSongs()
    }, [])

    console.log(songs)

    if (!songs) {
        return <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    }

    return <section className="section">
        <div className="container">
            <div className="columns is-multiline">
                {songs?.map(song => {
                    return <SongCards
                        key={song._id}
                        {...song}
                    />
                })}
            </div>
        </div>
    </section>
}

export default SongList
