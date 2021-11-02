import React from 'react'
import GenreDropdown from './GenreDropdown'
import RatingDropdown from './RatingDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { updateArtist, updateTitle, updateGenre, updateRating, addSong, updateFilter } from '../actions'

const InputForm = () => {
    const inputTitle = useSelector(state => state.currentInput.title)
    const inputArtist = useSelector(state => state.currentInput.artist)
    const inputGenre = useSelector(state => state.currentInput.genre)
    const inputRating = useSelector(state => state.currentInput.rating)
    const currSorting = useSelector(state => state.sortingMethod)

    const dispatch = useDispatch();

    const handleChange = event => {
        switch (event.target.id){
            case "input-title":
                dispatch(updateTitle(event.target.value))
                break
            case "input-artist":
                dispatch(updateArtist(event.target.value))
                break
            case "input-genre":
                dispatch(updateGenre(event.target.value))
                break
            case "input-rating":
                dispatch(updateRating(event.target.value))
                break
            default:
                break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addSong(inputTitle, inputArtist, inputGenre, parseInt(inputRating), currSorting))
        dispatch(updateFilter(inputTitle, 'title'))
        dispatch(updateFilter(inputArtist, 'artist'))
        dispatch(updateFilter(inputGenre, 'genre'))
        dispatch(updateFilter(parseInt(inputRating), 'rating'))
    }

    const isDisabled = (inputTitle === "" || inputArtist === "")

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value={inputTitle}
                placeholder="Title"
                id="input-title"
                onChange={handleChange}
            >
            </input>
            <input
                type="text"
                value={inputArtist}
                placeholder="Artist"
                id="input-artist"
                onChange={handleChange}
            >
            </input>
            <GenreDropdown onNewValue={handleChange}/>
            <RatingDropdown onNewValue={handleChange} />
            <button id="input-button" disabled={isDisabled}>
                Add song
            </button>
        </form>
    ) 
}

export default InputForm