import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from "../actions";
import { combineReducers } from "redux";


const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export function movies (state=initialMovieState, action) {
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
            movie => movie.Title !== action.movie.Title
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

const initialSearchState = {
    result: {}
}

export function search(state = initialSearchState, action) {
    return state;
}

const initialRootState = {
    movies:initialMovieState,
    search:initialSearchState
}

// export default function rootReducer (state=initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers ({
    movies:movies,
    search:search
})
