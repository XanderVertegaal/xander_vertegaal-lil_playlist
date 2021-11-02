import React from 'react'
import { useSelector } from 'react-redux'

const GenreDropdown = (props) => {
    const inputGenre = useSelector(state => state.genre)

    return (
        <select
            id="input-genre"
            onChange={props.onNewValue}
            value={inputGenre}
        >
            <option value="Classical">Classical</option>
            <option value="Postrock">Postrock</option>
            <option value="Triphop">Triphop</option>
            <option value="Country">Country</option>
            <option value="Pop">Pop</option>
        </select>
    )
}

export default GenreDropdown