import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import CreateSong from "./components/CreateSong"
import { useEffect, useState } from 'react'
import axios from "axios"
import ShowSong from "./components/Showsong"
import Login from "./components/login"
import SongList from "./components/SongList"

function App() {

  const [user, setUser] = useState(null);

  async function fetchUser() {
    const token = localStorage.getItem('token');
    const resp = await axios.get('/api/user', {
      headers: { Authorization: `Bearer ${token}` }


    })
    console.log(resp)
    setUser(resp.data)
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
        <Route path="/login" element={<Login fetchUser={fetchUser} />} />
        <Route path="/createsong" element={<CreateSong />} />
        <Route path="/songs/:songId" element={<ShowSong user={user} />} />
      </Routes>
    </Router>
  )
}

export default App