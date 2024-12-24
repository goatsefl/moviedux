import React from "react";
import MoviesGrid from "./MoviesGrid";
import '../styles.css'


export default function MovieCard({ movie }) {
    const handleError = (e) => {
        e.target.src = 'images/default.jpg';
    }

    const getRating = (rating) => {
        return (rating >= 8) ? 'rating-good' : (rating >= 5 && rating < 8) ? 'rating-ok' : 'rating-bad';
    }
    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRating(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div >

    );
}

