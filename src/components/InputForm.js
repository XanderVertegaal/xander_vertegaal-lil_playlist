import React from 'react'
import GenreDropdown from './GenreDropdown'
import RatingDropdown from './RatingDropdown'

const InputForm = () => {
    return (
        <form>
            <input
                type="text"
                value=""
                placeholder="Title"
                id="input-title"
            >
            </input>

            <input
                type="text"
                value=""
                placeholder="Artist"
                id="input-artist"
            >
            </input>

            <GenreDropdown />

            <RatingDropdown />

            <button
                id="input-button"
            >
                Add song
            </button>
        </form>
    )
}

export default InputForm