// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }

// {
//     type: 'DECREASE_COUNT'
// }
//action types variables
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';


//action creator function
export function addMovies (movies) {
    return{
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite (movie) {
    return{
        type: ADD_FAVOURITE,
        movie: movie
    }
}


export function removeFavourite (movie) {
    return{
        type: REMOVE_FAVOURITE,
        movie: movie
    }
}