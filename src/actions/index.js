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