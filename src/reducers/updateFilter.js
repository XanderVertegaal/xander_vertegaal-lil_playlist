const defaultFilter = {
    title: ['Black Sands', 'Clair de Lune', 'Theory of Machines'],
    artist: ['Bonobo', 'Claude Debussy', 'Ben Frost'],
    genre: ['Triphop', 'Classical', 'Postrock'],
    rating: [5, 4]
}

const updateFilter = (state = defaultFilter, action) => {
    let newState = {...state}
    switch (action.type) {
        case "UPDATE_FILTER":
            const type = action.payload.type
            const name = action.payload.name
            const value = action.payload.value    

            value === true ? 
            newState[type].push(name) :
            newState[type] = newState[type].filter(item => item !== name)
            break
        default:
            return state;
    }
    return newState
}

export default updateFilter
