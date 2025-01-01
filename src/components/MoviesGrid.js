import React, { useState, useEffect } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

// State can re-render if the state changes, but, variables cannot do that.
// getting and setting are two parts of state, manages the data.

// Variables are mostly static in nature, hence the emphasis on usage of states.
// To look at simulation, download react developer tools from chrome web-store.
// By using developer in chrome where the react website is loaded, we can check for the components and profiler for react.

export default function MoviesGrid() {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, searchGenre] = useState('All Genres')
    const [rating, searchRating] = useState('All')
    useEffect(() => {
        fetch('movies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const handleGenreChange = (e) => {
        searchGenre(e.target.value)
    }
    const handleRatingChange = (e) => {
        searchRating(e.target.value)
    }
    const matchesGenre = (movie, genre) => {
        return genre === 'All Genres' || movie.genre.toLowerCase() === genre.toLowerCase()
    }
    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
    const matchesRating = (movie, rating) => {
        switch (rating) {
            case "All": return true;
            case "Good": return movie.rating >= 8
            case "Okay": return movie.rating < 8 && movie.rating > 4
            case "Bad": return movie.rating < 5;
            default: return false;
        }
    }

    const filteredMovies = movies.filter(movie => {
        return matchesGenre(movie, genre) && matchesRating(movie, rating) && matchesSearchTerm(movie, searchTerm)
    })
    return (
        <div>
            <input
                className="search-input"
                type="text"
                placeholder="Search Movies..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange} >
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Ratings</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange} >
                        <option>All</option>
                        <option>Good</option>
                        <option>Okay</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className="movies-grid">
                {
                    filteredMovies.map((movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))
                }
            </div>
        </div>
    );
}