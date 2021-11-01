const defaultOrdering = {
    type: 'title',
    order: 'ascending'
}

const updateSorting = (state = defaultOrdering, action) => {
    let newState = {...state}
    switch (action.type) {
        case "SORT_ARTIST":
            newState.type = 'artist';
            break
        case "SORT_TITLE":
            newState.type = 'title';
            break
        case "SORT_GENRE":
            newState.type = 'genre';
            break
        case "SORT_RATING":
            newState.type = 'rating'
            break
        default:
            return state
    }
    newState.order = action.payload
    return newState
}

export default updateSorting