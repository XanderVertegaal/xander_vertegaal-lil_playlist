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

            // console.log('Sorting algorithm:', action.payload.sorting.type, action.payload.sorting.order)
            newState.sort((a, b) => {
                let x = a[action.payload.sorting.type];
                let y = b[action.payload.sorting.type];
                if (action.payload.sorting.order === 'ascending') {
                    return (x > y ? 1 : x < y ? -1 : 0)
                } else {
                    return (x > y ? -1 : x < y ? 1 : 0)
                }
            })  

            return newState


        case "DELETE_SONG":
            const deleteId = parseInt(action.payload.replace("btn-", ""))
            return newState.filter(song => song.id !== deleteId)

            case "SORT_TITLE":
            newState.sort((a, b) => {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                if (action.payload === 'ascending') {
                    return (x > y ? 1 : x < y ? -1 : 0)
                } else {
                    return (x > y ? -1 : x < y ? 1 : 0)
                }
            })
            return newState

            case "SORT_ARTIST":
            newState.sort((a, b) => {
                let x = a.artist.toLowerCase();
                let y = b.artist.toLowerCase();
                if (action.payload === 'ascending') {
                    return (x > y ? 1 : x < y ? -1 : 0)
                } else {
                    return (x > y ? -1 : x < y ? 1 : 0)
                }
            })
            return newState

            case "SORT_GENRE":
            newState.sort((a, b) => {
                let x = a.genre.toLowerCase();
                let y = b.genre.toLowerCase();
                if (action.payload === 'ascending') {
                    return (x > y ? 1 : x < y ? -1 : 0)
                } else {
                    return (x > y ? -1 : x < y ? 1 : 0)
                }
            })
            return newState

            case "SORT_RATING":
            newState.sort((a, b) => {
                let x = a.rating;
                let y = b.rating;
                if (action.payload === 'ascending') {
                    return (x > y ? 1 : x < y ? -1 : 0)
                } else {
                    return (x > y ? -1 : x < y ? 1 : 0)
                }
            })
            return newState

        default:
            return state
    }
}

export default updateSongList