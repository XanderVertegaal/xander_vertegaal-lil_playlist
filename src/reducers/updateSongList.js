const defaultSongList = [
    {
        id: 1,
        artist: "Bonobo",
        title: "Black Sands",
        genre: "Triphop",
        rating: 5
    },

    {
        id: 2,
        artist: "Claude Debussy",
        title: "Clair de Lune",
        genre: "Classical",
        rating: 4
    },

    {   
        id: 3,
        artist: "Ben Frost",
        title: "Theory of Machines",
        genre: "Postrock",
        rating: 5
    },
]

const updateSongList = (state = defaultSongList, action) => {
    let newState = [...state]
    switch (action.type) {
        case "ADD_SONG":
            var found = false
            for (let i = 1; found === false; i++) {
                var newId = i;
                found = !(newState.some(item => item.id === i))
            }
            const newArtist = action.payload.artist; 
            const newTitle = action.payload.title;
            const newGenre = action.payload.genre;
            const newRating = action.payload.rating;
            newState.push({
                    id: newId,
                    artist: newArtist,
                    title: newTitle,
                    genre: newGenre,
                    rating: newRating
                })
            return newState
        case "DELETE_SONG":
            const deleteId = parseInt(action.payload.replace("btn-", ""))
            console.log('To be deleted ID:', deleteId)
            return newState.filter(song => song.id !== deleteId)
        default:
            return state
    }
}

export default updateSongList