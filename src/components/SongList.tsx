import { useEffect, useState } from "react" // Importing necessary modules from React
import SongCards from "./SongCards" // Importing SongCards component
import { ISong } from "../interfaces/songs" // Importing ISong interface

type Songs = null | Array<ISong> // Defining type for Songs

function SongList() { // Functional component SongList

    const [songs, setSongs] = useState<Songs>(null) // State for songs data
    const [search, setSearch] = useState('') // State for search query

    useEffect(() => { // Effect hook to fetch songs data
        async function fetchSongs() {
            const resp = await fetch('${baseUrl}/songs') // Fetching songs data from API
            const data = await resp.json() // Parsing response data
            setSongs(data) // Setting songs state with fetched data
        }
        fetchSongs()
    }, []) // Dependency array to execute effect only once on component mount

    console.log(songs) // Logging songs data to console

    function handleChange(e: any) { // Function to handle search input changes
        setSearch(e.currentTarget.value) // Updating search state with input value
    }

    function unifiedSearch() { // Function to perform unified search
        return songs?.filter(library => {
            return library.name.toLowerCase().includes(search.toLowerCase()) || // Searching by name
                library.artist.toLowerCase().includes(search.toLowerCase()) || // Searching by artist
                library.album.toLowerCase().includes(search.toLowerCase()) || // Searching by album
                library.genre.toLowerCase().includes(search.toLowerCase()) // Searching by genre
        })
    }

    if (!songs) { // Conditional rendering while fetching data
        return <div>
            <div className="lds-ripple"><div></div><div></div></div> {/* Loading animation */}
        </div>
    }

    return <section className="section"> {/* Rendering the song list section */}
        <div className="container"> {/* Container for song list */}
            <input className="input mb-4" placeholder="Search..." onChange={handleChange} value={search} /> {/* Search input field */}
            <div className="columns is-multiline"> {/* Columns for displaying song cards */}
                {unifiedSearch()?.map(song => { // Mapping through filtered songs data and rendering SongCards component
                    return <SongCards
                        key={song._id} // Unique key for each song card
                        {...song} // Passing song data as props
                    />
                })}
            </div>
        </div>
    </section>
}

export default SongList // Exporting the SongList component