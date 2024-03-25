import React, { SyntheticEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ISong } from "../interfaces/songs"
import SongCards from "./SongCards"
import { IUser } from "../interfaces/user"
import axios from "axios"

function ShowSong({ user }: { user: null | IUser }) {
    const [song, updateSong] = React.useState<ISong | null>(null)
    const { songId } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        console.log("The song page has mounted")
    }, [])


    React.useEffect(() => {
        async function fetchSong() {
            try {
                const resp = await axios.get(`/api/songs/${songId}`)
                // const CatsData = await resp.json()
                updateSong(resp.data)
                console.log(resp.data)
            }
            catch (e) {
            }

        }
        fetchSong()
    }, [])

    async function deleteSong(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem('token')
            await axios.delete('/api/songs/' + songId, {
                headers: { Authorization: `Bearer ${token}` }
            })
            navigate('/songs')
        } catch (e: any) {
            console.log(e.response.data)
        }
    }
    console.log(user)
    console.log(song)

    return <section className="section">
        <div className="container">
            <div className="columns is-multiline">
                {song && <SongCards
                    key={song._id}
                    {...song}
                />}
            </div>
            {song && (user._id === song.user) && <button onClick={deleteSong} className="button is-danger">Delete this song!</button>}
        </div>
    </section>
}

export default ShowSong