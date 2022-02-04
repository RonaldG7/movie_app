import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    return (
        <>
            <div className="d-flex justify-content-start">
                {props.movies.map((movie, i) =>
                    <div key={i} className="m-3 image-container">
                        <img src={movie.Poster} alt="movie"/>
                        <div onClick={() => props.handleFavouritesClick(movie)}
                             className="overlay d-flex align-items-center justify-content-center">
                            <FavouriteComponent/>
                        </div>
                    </div>)}
            </div>
        </>
    );
};

export default MovieList;