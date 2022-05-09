import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export default function movies (state=initialMovieState, action) {
    if(action.type === ADD_MOVIES) {
        return {
            ...state,
            list:action.movies
        };
    }
    else if (action.type === ADD_FAVOURITE) {
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
    }

    else if (action.type === REMOVE_FAVOURITE) {
        const removedArray = state.favourites.filter(
            movie => movie.Title != action.movie.Title
        );
        return {
            ...state,
            favourites: removedArray 
        }
    }

    else if (action.type === SHOW_FAVOURITES) {
        return{
            ...state,
            showFavourites: action.value
        }
    }
    return state;

}
