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
            <option value="Country">Country</option>
            <option value="Dance">Dance</option>
            <option value="Disco">Disco</option>
            <option value="Hard Rock">Hard Rock</option>
            <option value="Heavy Metal">Heavy Metal</option>
            <option value="Jazz">Jazz</option>
            <option value="Latin">Latin</option>
            <option value="Pop">Pop</option>
            <option value="Postrock">Postrock</option>
            <option value="Rock">Rock</option>
            <option value="Triphop">Triphop</option>
            <option value="Rhythm and Blues">Rhythm and Blues</option>
            
            
            
        </select>
    )
}

export default GenreDropdown