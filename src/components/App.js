import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, show_Favourites } from "../actions";

class App extends React.Component {
  
  componentDidMount () {
    const { store } = this.props;
    store.subscribe(()=> {
      console.log('UPDATED');
      
    console.log('state', store.getState())
      this.forceUpdate();
    });
    //make api call
    // dispatch action
    store.dispatch(addMovies(data))
    console.log('state', store.getState())
  }

  isMovieFavourite = (movie) => {
    const{favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1) {
      // movie is in favourites
      return true;
    }

    //movie is not in favourites
    return false;
  }

  onChangeTab = (value) => {
    this.props.store.dispatch(show_Favourites(value))
  }

  render () {
    const {list, favourites, showFavourites} = this.props.store.getState();
    const displayMovies = showFavourites? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tab'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tab' : ''}`}  onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="list" >
            {displayMovies.map((movie, index) => (
              <MovieCard 
               movie={movie}
               key={`movies-${index}`}
               dispatch={this.props.store.dispatch}
               isFavourite ={this.isMovieFavourite(movie)}
               />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    );

  }
 
}

export default App;
