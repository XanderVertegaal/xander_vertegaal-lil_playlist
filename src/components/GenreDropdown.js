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
            <option value="classical">Classical</option>
            <option value="postrock">Postrock</option>
            <option value="triphop">Triphop</option>
            <option value="country">Country</option>
            <option value="pop">Pop</option>
        </select>
    )
}

export default GenreDropdown