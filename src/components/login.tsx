import { SyntheticEvent, useState } from 'react' // Importing necessary modules from React
import axios from 'axios' // Importing Axios for HTTP requests
import { useNavigate } from 'react-router-dom' // Importing useNavigate hook from React Router
import { baseUrl } from "../config" // Importing base URL from config

const Login = ({ fetchUser }: { fetchUser: Function }) => { // Functional component Login receiving props

    const navigate = useNavigate() // Initializing the useNavigate hook for navigation

    const [formData, setFormData] = useState({ // Initializing state for form data
        email: "", // Email field
        password: "" // Password field
    })

    const [errorMessage, setErrorMessage] = useState("") // Initializing state for error message

    function handleChange(e: any) { // Function to handle form input changes
        const fieldName = e.target.name // Getting the name of the input field
        const newFormData = structuredClone(formData) // Cloning the current form data
        newFormData[fieldName as keyof typeof formData] = e.target.value // Updating the corresponding field in the cloned form data
        setFormData(newFormData) // Setting the state with the updated form data
        setErrorMessage("") // Clearing any existing error message
    }

    async function handleSubmit(e: SyntheticEvent) { // Function to handle form submission
        try {
            e.preventDefault() //? Prevents the page from refreshing
            const resp = await axios.post(`${baseUrl}/login`, formData) // Sending a POST request to the login API with form data
            localStorage.setItem("token", resp.data.token) // Storing the token in localStorage
            console.log(resp.data) // Logging the response data to the console
            fetchUser() // Executing the fetchUser function passed as prop
            navigate('/songs') // Navigating to the '/songs' route after successful login
        } catch (e: any) { // Handling errors
            setErrorMessage(e.response.data.message) // Setting error message from response data
        }
    }

    console.log(formData) // Logging the current form data to the console

    return <div className="section"> {/* Rendering the login form */}
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'email'}
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name={'password'}
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    {errorMessage && <small className='has-text-danger'>{errorMessage}</small>} {/* Rendering error message if exists */}
                </div>
                <button className="button">Submit</button> {/* Submit button */}
            </form>
        </div>
    </div>
}

export default Login // Exporting the Login component