import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";

const initialMovieState = {
    list:[],
    favourites:[]
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
    return state;

}
