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

    useEffect(() => {
        fetch('movies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div className="movies-grid">
            {
                movies.map(movie =>
                (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))
            }
        </div>
    );
}