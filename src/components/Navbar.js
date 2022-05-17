import React from "react";
import { addMovies } from "../actions";
import { handleMovieSearch } from "../actions";
import { addMovieToList } from "../actions";


class Navbar extends React.Component {
    
    constructor (props) {
        super(props);
        this.state= {
            searchText: ''
        }
    }

    

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        });
    }

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    };

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });

    }

    render() {
        const {result:movie, showSearchResults} = this.props.search;
        return (
            <div className="nav">
                
                <div className="logo">
                    <div className="pic">
                        <img alt="logo" src="" />
                    </div>
                    HRmovies
                </div>

                <div className="searchbar">
                    <input onChange={this.handleChange} />
                    <button onClick={this.handleSearch} id="search-btn">Search</button>
                        {showSearchResults && (
                            <div className="search-results">
                                <div className="search-result">
                                    <img src={movie.Poster} alt="search-pic" />
                                    <div className="movie-info">
                                        <span>{movie.Title}</span>
                                        <button onClick={() => this.handleAddToMovies(movie)}>
                                            Add to Movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                       
                    
                    
                </div>

                 <div className="extra">

                </div>
            </div>
        );      
    }
}

export default Navbar;
