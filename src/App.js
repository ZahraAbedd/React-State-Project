import './App.css';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Routes, Route, Link } from "react-router-dom"
import Home from './containers/Home'
import Search from './containers/Search'
import Likes from './containers/Likes'
import Profile from './containers/Profile'


function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="search" element={ <Search/> } />
          <Route path="likes" element={ <Likes/> } />
          <Route path="profile" element={ <Profile/> } />
        </Routes>
      </main>
      <nav>
        <Link to='/'><FaHome className="fas fa-home" /></Link>
        <Link to='search'><FaSearch className="fas fa-search" /></Link>
        <Link to='likes'><FaHeart className="fas fa-heart" /></Link>
        <Link to='profile'><FaUser className="fas fa-user" /></Link>
      </nav>

    </div>
  );
}

export default App;
