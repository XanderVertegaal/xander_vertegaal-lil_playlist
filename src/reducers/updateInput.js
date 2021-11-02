let defaultInputState = {
    artist: '',
    title: '',
    genre: 'Classical',
    rating: 1
}

const updateInput = (state = defaultInputState, action) => {
    let newState = {...state}
    switch (action.type) {
        case "UPDATE_TITLE":
            newState.title = action.payload;
            break
        case "UPDATE_ARTIST":
            newState.artist = action.payload;
            break
        case "UPDATE_GENRE":
            newState.genre = action.payload;
            break
        case "UPDATE_RATING":
            newState.rating = action.payload;
            break
        default:
            newState = defaultInputState
    }
    return newState;
}

export default updateInput