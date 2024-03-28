import { SyntheticEvent, useState } from 'react' // Importing necessary modules from React
import axios from 'axios' // Importing Axios for HTTP requests
import { useNavigate } from 'react-router-dom' // Importing useNavigate hook from React Router

const Signup = () => { // Functional component Signup

    const navigate = useNavigate() // Initializing the useNavigate hook for navigation

    const [formData, setFormData] = useState({ // Initializing state for form data
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    })

    const [errorData, setErrorData] = useState({ // Initializing state for error data
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    })

    //? Errors that could come back from the API
    function handleChange(e: any) { // Function to handle form input changes
        const fieldName = e.target.name // Getting the name of the input field
        const newFormData = structuredClone(formData) // Cloning the current form data
        newFormData[fieldName as keyof typeof formData] = e.target.value // Updating the corresponding field in the cloned form data
        setFormData(newFormData) // Setting the state with the updated form data
    }

    async function handleSubmit(e: SyntheticEvent) { // Function to handle form submission
        try {
            e.preventDefault() //? Prevents the page from refreshing
            const resp = await axios.post('/api/signup', formData) // Sending a POST request to the signup API with form data
            console.log(resp.data) // Logging the response data to the console
            navigate('/login') // Navigating to the '/login' route after successful signup
        } catch (e: any) {
            setErrorData(e.response.data.errors) // Setting error data from response data
        }
    }

    // console.log(formData)
    console.log(errorData) // Logging error data to console


    //Rendering the sign up form 

    return <div className="section">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name={'username'}
                            onChange={handleChange}
                            value={formData.username}
                        />
                        {errorData.username && <small className='has-text-danger'>{errorData.username}</small>}
                    </div>
                </div>
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
                        {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
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
                        {errorData.password && <small className="has-text-danger">{errorData.password}</small>}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirm password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name={'passwordConfirmation'}
                            onChange={handleChange}
                            value={formData.passwordConfirmation}
                        />
                        {errorData.passwordConfirmation && <small className="has-text-danger">{errorData.passwordConfirmation}</small>}
                    </div>
                </div>
                <button className="button">Submit</button>
            </form>
        </div>
    </div>
}

export default Signup