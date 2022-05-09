import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {

    addFavouritemovie = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie))
    }

    addUnFavouritemovie = () => {
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
    }

    render() {
        const{movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                   <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title"> {movie.Title}</div>
                    <div className="desc">{movie.Plot}</div>

                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <div className="footer-btns">
                            <a  target="_blank" rel="noopener noreferrer" className="trailer" href={movie.Trailer}>Trailer</a>
                            {
                                isFavourite
                                ? <button onClick={this.addUnFavouritemovie} className="unfav-btn">Unfavourite</button>
                                : <button onClick={this.addFavouritemovie} className="fav-btn">Favourite</button>
                            }
                        </div>
                       
                    </div>

                </div>
            </div>
        );      
    }
}

export default MovieCard;
