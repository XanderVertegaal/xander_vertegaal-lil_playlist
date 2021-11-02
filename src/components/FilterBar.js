import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../actions'

const FilterBar = () => {
    const currSongList = useSelector(state => state.songList)
    const dispatch = useDispatch
    
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
        const itemName = event.target.value;
        const itemType = event.target.parentElement.parentElement.parentElement.className.replace('filter-list-', '');
        const itemValue = event.target.checked;
        console.log(itemName, itemType, itemValue)
        dispatch(updateFilter(itemName, itemType, itemValue)) // Dit gaat dus mis.
        
    }

    const outputList = []
    for (let itemList of [currTitles, currArtists, currGenres, currRatings]) {
        outputList.push(itemList.map(item => {
            return (
                <li key={item}>
                <label>
                    <input type="checkbox" value={item} onChange={handleChange}/>
                    {item}              
                </label>
            </li>
            )
        }))
    }

    return(
        <tr className="filter-row">
            <th>
                <ul className="filter-list-title">
                    {outputList[0]}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-artist">
                    {outputList[1]}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-genre">
                    {outputList[2]}
                </ul>    
            </th>
            <th>
                <ul className="filter-list-rating">
                    {outputList[3]}
                </ul>    
            </th>
        </tr>
    )
}

export default FilterBar
