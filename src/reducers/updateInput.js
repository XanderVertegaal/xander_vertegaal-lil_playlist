const defaultInputState = {
    artist: 'Artist',
    song: 'song',
    genre: 'Classical',
    rating: 1
}

const updateInput = (state = defaultInputState, action) => {
    switch (action.type) {
        case "UPDATE_SONG":
            state.song = action.payload;
            break
        case "UPDATE_ARTIST":
            state.artist = action.payload;
            break
        case "UPDATE_GENRE":
            state.genre = action.payload;
            break
        case "UPDATE_RATING":
            state.rating = action.payload;
            break
        default:
            state = 'Undefined'
    }
    return state;
}

export default updateInput