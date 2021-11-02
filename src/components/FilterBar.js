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

    return(
        <tr className="filter-row">
            <th>
                <ul className="filter-list-title">
                    {outputTitles}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-artist">
                    {outputArtists}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-genre">
                    {outputGenres}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-rating">
                    {outputRatings}
                </ul>    
            </th>
        </tr>
    )
}

export default FilterBar
