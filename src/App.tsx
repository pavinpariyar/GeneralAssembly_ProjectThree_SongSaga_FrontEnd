import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary modules from React Router
import Home from "./components/Home"; // Importing Home component
import Navbar from "./components/Navbar"; // Importing Navbar component
import Signup from "./components/Signup"; // Importing Signup component
import CreateSong from "./components/CreateSong"; // Importing CreateSong component
import { useEffect, useState } from 'react'; // Importing necessary modules from React
import axios from "axios"; // Importing Axios for HTTP requests
import ShowSong from "./components/Showsong"; // Importing ShowSong component
import Login from "./components/Login"; // Importing Login component
import SongList from "./components/SongList"; // Importing SongList component

function App() { // Functional component App

  const [user, setUser] = useState(null); // State for user data

  async function fetchUser() { // Function to fetch user data
    const token = localStorage.getItem('token'); // Getting token from localStorage
    const resp = await axios.get('/api/user', { // Sending GET request to fetch user data
      headers: { Authorization: `Bearer ${token}` } // Attaching authorization token to request headers
    });
    console.log(resp); // Logging response data to console
    setUser(resp.data); // Setting user state with fetched data
  }

  useEffect(() => { // Effect hook to fetch user data on component mount
    const token = localStorage.getItem('token'); // Getting token from localStorage
    if (token) fetchUser(); // Fetching user data if token exists
  }, []);

  return (
    <Router> {/* Router component for defining routes */}
      <Navbar user={user} setUser={setUser} /> {/* Navbar component */}
      <Routes> {/* Routes component for defining route configuration */}
        <Route path="/home" element={<Home />} /> {/* Route for Home component */}
        <Route path="/songs" element={<SongList />} /> {/* Route for SongList component */}
        <Route path="/signup" element={<Signup />} /> {/* Route for Signup component */}
        <Route path="/login" element={<Login fetchUser={fetchUser} />} /> {/* Route for Login component */}
        <Route path="/createsong" element={<CreateSong />} /> {/* Route for CreateSong component */}
        <Route path="/songs/:songId" element={<ShowSong user={user} />} /> {/* Route for ShowSong component */}
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component