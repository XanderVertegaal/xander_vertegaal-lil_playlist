const defaultFilter = {
    title: [],
    artist: [],
    genre: [],
    rating: []
}

const updateFilter = (state = defaultFilter, action) => {
    let newState = {...state}
    switch (action.type) {
        case "UPDATE_FILTER":
            console.log('Type:', action.payload.type)
            console.log('Name:', action.payload.name)
            console.log('Value:', action.payload.value)
        break
        default:
            return state;
    }
    return newState
}

export default updateFilter
