import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import SongList from "/components/SongList"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Createsong from "./components/createsong"
import { useEffect, useState } from 'react'
import axios from "axios"
import ShowSong from "./components/ShowSong"

function App() {

const [user, setUser] = useState(null);

  async function fetchUser() {
const token = localStorage.getItem('token');
    const resp = await axios.get ('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setUser (resp.data)
  }
 
  useEffect(() => {  
const token = localStorage.getItem('token');
    if (token) fetchUser()
  }, [])

return (
  <Router>
    <Navbar user={user} setUser={setUser} />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/songs" element={<SongList />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/createsong" element={<Createsong />} />
      <Route path="/songs/:id" element={<ShowSong user={user}/>} />
    </Routes>
  </Router>
)
}
