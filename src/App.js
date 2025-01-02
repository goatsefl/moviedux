import logo from './logo.svg';
import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MoviesGrid from './components/MoviesGrid.js';
import Watchlist from './components/Watchlist.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// In react, we use components to build dynamic webpages and are reusable building blocks.
// A component can be an info card that's used throughout the website at multiple places,
// Instead of creating multiple calls to create it, we simply import it from the file.
// Now, if user needs to use css in one of their react scripts, we use className as shown below.
function App() {
  const [movies, setMovies] = useState([])
  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    fetch('movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])
  const toggleWatchList = (movieId) => {
    setWatchList(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/watchlist'>Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies} watchList={watchList} toggleWatchList={toggleWatchList} />}></Route>
            <Route path='/watchlist' element={<Watchlist watchList={watchList} movies={movies} toggleWatchList={toggleWatchList} />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
