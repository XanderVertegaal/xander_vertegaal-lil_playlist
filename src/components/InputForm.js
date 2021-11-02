import React from 'react'
import GenreDropdown from './GenreDropdown'
import RatingDropdown from './RatingDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { updateArtist, updateTitle, updateGenre, updateRating, addSong } from '../actions'

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
        console.log('Submit handler log:', inputTitle)
        dispatch(addSong(inputTitle, inputArtist, inputGenre, inputRating, currSorting))
    }

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
            <button id="input-button">
                Add song
            </button>
        </form>
    )
}

export default InputForm