import { useEffect, useState } from "react"
import SongCards from "./SongCards"
import { ISong } from "../interfaces/songs"

type Songs = null | Array<ISong>

function SongList() {

    const [songs, setSongs] = useState<Songs>(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchSongs() {
            const resp = await fetch('/api/songs')
            const data = await resp.json()
            setSongs(data)
        }
        fetchSongs()
    }, [])

    console.log(songs)

    function handleChange(e: any) {
        setSearch(e.currentTarget.value)
    }

    function unifiedSearch() {
        return songs?.filter(library => {
            return library.name.toLowerCase().includes(search.toLowerCase()) ||
                library.artist.toLowerCase().includes(search.toLowerCase()) ||
                library.album.toLowerCase().includes(search.toLowerCase()) ||
                library.genre.toLowerCase().includes(search.toLowerCase())
        })
    }

    if (!songs) {
        return <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    }

    return <section className="section">
        <div className="container">
            <input className="input mb-4" placeholder="Search..." onChange={handleChange} value={search} />
            <div className="columns is-multiline">
                {unifiedSearch()?.map(song => {
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
