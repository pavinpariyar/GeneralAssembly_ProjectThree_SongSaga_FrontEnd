import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SongCards from './SongCards'
import { ISong } from '../interfaces/song'
import { IUser } from '../interfaces/user'
import axios from 'axios'
const ShowSong = ({ user }: { user: null | IUser }) => {
    const [song, updateSongs] = useState<ISong | null>(null)
    const { songId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(‘The Song Page has mounted’)
    }, [])
    useEffect(() => {
        async function fetchSongs() {
            const resp = await fetch(`/api/songs/${songId}`)
            const SongsData = await resp.json()
            updateSongs(SongsData)
        }
        fetchSongs()
    }, [])
    async function deleteSong(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem(‘token’)
            await axios.delete('/api/songs/' + songId, {
                headers: { Authorization: `Bearer ${token}` }
            })
            navigate(‘/songs’)
        } catch (e: any) {
            console.log(e.response.data)
        }
    }
    console.log(user)
    console.log(song)
    return <section className="section">
        <div className=“container”>
            <div className=“columns is-multiline”>
                {song && <SongCards
                    key={song._id}
                    {...song}
                />}
            </div>
            {song && (user._id === song.users) && <button onClick={deleteSong} className="button is-danger">Delete</button>}
        </div>
    </section>
}
export default ShowSong