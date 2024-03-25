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

    function nameSearch() {
        return songs?.filter(library => {
            return library.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    function artistSearch() {
        return songs?.filter(library => {
            return library.artist.toLowerCase().includes(search.toLowerCase())
        })
    }

    function albumSearch() {
        return songs?.filter(library => {
            return library.album.toLowerCase().includes(search.toLowerCase())
        })
    }

    function genreSearch() {
        return songs?.filter(library => {
            return library.genre.toLowerCase().includes(search.toLowerCase())
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
                {nameSearch()?.map(song => {
                    return <SongCards
                        key={song._id}
                        name={song.name}
                        artist={song.artist}
                        album={song.album}
                        genre={song.genre}
                    />
                })}
            </div>
            <div className="column is-multiline">
                {artistSearch()?.map(song => {
                    return <SongCards
                        
                        name={song.name}
                        artist={song.artist}
                        album={song.album}
                        genre={song.genre}
                    />
                })}
            </div>
            <div className="column is-multiline">
                {albumSearch()?.map(song => {
                    return <SongCards
                        name={song.name}
                        artist={song.artist}
                        album={song.album}
                        genre={song.genre}
                    />
                })}
            </div>
            <div className="column is-multiline">
                {genreSearch()?.map(song => {
                    return <SongCards
                        name={song.name}
                        artist={song.artist}
                        album={song.album}
                        genre={song.genre}
                    />
                })}
            </div>
        </div>
    </section>
}

export default SongList
