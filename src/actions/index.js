export const updateArtist = (value) => {
    return {
        type: "UPDATE_ARTIST",
        payload: value
    }
}

export const updateTitle = (value) => {
    return {
        type: "UPDATE_TITLE",
        payload: value
    }
}

export const updateGenre = (value) => {
    return {
        type: "UPDATE_GENRE",
        payload: value
    }
}

export const updateRating = (value) => {
    return {
        type: "UPDATE_RATING",
        payload: value
    }
}

export const addSong = (title, artist, genre, rating, sorting) => {
    return {
        type: "ADD_SONG",
        payload: {
            title, 
            artist, 
            genre, 
            rating,
            sorting
        }
    }
}

export const deleteSong = (itemId) => {
    return {
        type: "DELETE_SONG",
        payload: itemId
    }
}

export const sortTitle = (order) => {
    return {
        type: "SORT_TITLE",
        payload: order
    }
}

export const sortArtist = (order) => {
    return {
        type: "SORT_ARTIST",
        payload: order
    }
}

export const sortGenre = (order) => {
    return {
        type: "SORT_GENRE",
        payload: order
    }
}

export const sortRating = (order) => {
    return {
        type: "SORT_RATING",
        payload: order
    }
}

export const updateFilter = (name, type, value = true) => {
    return {
        type: "UPDATE_FILTER",
        payload: {
            name,
            type,
            value
        }    
    }

}