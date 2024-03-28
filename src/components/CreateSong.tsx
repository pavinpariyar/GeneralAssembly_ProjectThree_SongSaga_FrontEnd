import { SyntheticEvent, useState } from "react" // Importing necessary modules from React
import axios from 'axios' // Importing Axios for HTTP requests
import { useNavigate } from "react-router-dom" // Importing useNavigate hook from React Router
import { baseUrl } from "../config" // Importing base URL from config

function CreateSong() {

    const navigate = useNavigate() // Initializing the useNavigate hook for navigation
    // ! Our state should look like a song now.
    const [formData, setFormData] = useState({ // Initializing state for form data
        name: '', // Song name field
        artist: '', // Artist field
        album: '', // Album field
        genre: '', // Genre field
        albumCover: '', // Album cover image field
        songLink: '', // YouTube song link field
    })

    function handleChange(e: any) { // Function to handle form input changes
        const fieldName = e.target.name // Getting the name of the input field
        const newFormData = structuredClone(formData) // Cloning the current form data
        newFormData[fieldName as keyof typeof formData] = e.target.value // Updating the corresponding field in the cloned form data
        setFormData(newFormData) // Setting the state with the updated form data
    }

    async function handleSubmit(e: SyntheticEvent) { // Function to handle form submission
        e.preventDefault() // Preventing default form submission behavior
        // ! We now need to provide a TOKEN in the request. We get this from localStorage
        const token = localStorage.getItem('token') // Getting the token from localStorage

        // ! Here we attach the token to the request to the API.
        const resp = await axios.post(`${baseUrl}/songs`, formData, { // Sending a POST request to the API with form data and authorization token
            headers: { Authorization: `Bearer ${token}` } // Attaching authorization token to the request headers
        })
        console.log(resp.data) // Logging the response data to the console
        // ! We're now going to songs. 
        navigate('/songs') // Navigating to the '/songs' route after successful submission
    }

    console.log(formData) // Logging the current form data to the console

    //Rendering the form 

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
                <button className="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
}

export default CreateSong