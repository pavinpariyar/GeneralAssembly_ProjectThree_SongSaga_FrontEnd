import { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CreateSong() {

    const navigate = useNavigate()
    // ! Our state should look like a song now.
    const [formData, setFormData] = useState({
        name: '',
        artist: '',
        album: '',
        genre: '',
        albumCover: '',
        songLink: '',
    })

    function handleChange(e: any) {
        const fieldName = e.target.name
        const newFormData = structuredClone(formData)
        newFormData[fieldName as keyof typeof formData] = e.target.value
        setFormData(newFormData)
    }

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        // ! We now need to provide a TOKEN in the request. We get this from localStorage
        const token = localStorage.getItem('token')


        // ! Here we attach the token to the request to the API.
        const resp = await axios.post('/api/songs', formData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(resp.data)
        // ! We're now going to songs. 
        navigate('/songs')
    }

    console.log(formData)

    return <div className="section">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Song Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'name'}
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Artist</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'artist'}
                            onChange={handleChange}
                            value={formData.artist}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Album</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'album'}
                            onChange={handleChange}
                            value={formData.album}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Genre</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'genre'}
                            onChange={handleChange}
                            value={formData.genre}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Album Cover Image</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'albumCover'}
                            onChange={handleChange}
                            value={formData.albumCover}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">YouTube Song Link</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'songLink'}
                            onChange={handleChange}
                            value={formData.songLink}
                        />
                    </div>
                </div>
                <button className="button">Submit</button>
            </form>
        </div>
    </div>
}

export default CreateSong