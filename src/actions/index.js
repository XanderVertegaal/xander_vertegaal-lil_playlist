export const updateArtist = (value) => {
    return {
        type: "UPDATE_ARTIST",
        payload: value
    }
}

export const updateSong = (value) => {
    return {
        type: "UPDATE_SONG",
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