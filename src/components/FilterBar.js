import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../actions'

const FilterBar = () => {
    const currSongList = useSelector(state => state.songList)
    const currFilter = useSelector(state => state.currentFilter)

    const dispatch = useDispatch()
    
    const currTitles = []
    const currArtists = []
    const currGenres = []
    const currRatings = []

    for (let song of currSongList) {
        if (song.title !== "" && currTitles.includes(song.title) === false) {
            currTitles.push(song.title)
        }
        if (song.artist !== "" && currArtists.includes(song.artist) === false) {
            currArtists.push(song.artist)
        }
        if (song.genre !== "" && currGenres.includes(song.genre) === false) {
            currGenres.push(song.genre)
        }
        if (song.rating !== "" && currRatings.includes(song.rating) === false) {
            currRatings.push(song.rating)
        }
    }

    const handleChange = event => {
        const itemType = event.target.parentElement.parentElement.parentElement.className.replace('filter-list-', '');
        const itemName = (itemType === 'rating' ? parseInt(event.target.value) : event.target.value);
        const itemValue = event.target.checked;
        dispatch(updateFilter(itemName, itemType, itemValue))
    }

    const outputTitles = []
    const outputArtists = []
    const outputGenres = []
    const outputRatings = []

    for (let item of currTitles) {
        let isInFilter = currFilter.title.includes(item)
        outputTitles.push(
            <li key={item}>
                <label>
                    <input 
                        type="checkbox" 
                        value={item} 
                        onChange={handleChange}
                        checked={isInFilter}
                    />
                    {item}              
                </label>
            </li>
        )      
    }

    for (let item of currArtists) {
        let isInFilter = currFilter.artist.includes(item)
        outputArtists.push(
            <li key={item}>
                <label>
                    <input 
                        type="checkbox" 
                        value={item} 
                        onChange={handleChange}
                        checked={isInFilter}
                    />
                    {item}              
                </label>
            </li>
        )      
    }

    for (let item of currGenres) {
        let isInFilter = currFilter.genre.includes(item)
        outputGenres.push(
            <li key={item}>
                <label>
                    <input 
                        type="checkbox" 
                        value={item} 
                        onChange={handleChange}
                        checked={isInFilter}
                    />
                    {item}              
                </label>
            </li>
        )      
    }

    for (let item of currRatings) {
        let isInFilter = currFilter.rating.includes(item)
        outputRatings.push(
            <li key={item}>
                <label>
                    <input 
                        type="checkbox" 
                        value={item} 
                        onChange={handleChange}
                        checked={isInFilter}
                    />
                    {item}              
                </label>
            </li>
        )      
    }

    let displayStyle = {
        display: 'none'
    }
    if (outputTitles.length !== 0 || 
        outputArtists.length !== 0 || 
        outputGenres.length !== 0 || 
        outputRatings.length !== 0) {
            displayStyle = {
                display: "block"
        }
    }
    
    return(
        <footer style={displayStyle} className="filter-footer">
            <h3 className="filter-header">Available filters:</h3>
            <table className="filter-table">
                <tbody>
                    <tr className="filter-row">
                        <td>
                            <ul className="filter-list-title">
                                {outputTitles}
                            </ul>    
                        </td>
                        <td>
                            <ul className="filter-list-artist">
                                {outputArtists}
                            </ul>    
                        </td>
                        <td>
                            <ul className="filter-list-genre">
                                {outputGenres}
                            </ul>    
                        </td>
                        <td>
                            <ul className="filter-list-rating">
                                {outputRatings}
                            </ul>    
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>
    )
}

export default FilterBar
