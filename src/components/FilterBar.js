import React from 'react'
import { useSelector } from 'react-redux'

const FilterBar = () => {
    const currSongList = useSelector(state => state.updateSongList)
    
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

    const outputList = []
    for (let itemList of [currTitles, currArtists, currGenres, currRatings]) {
        outputList.push(itemList.map(item => {
            return (
                <li>
                <label>
                    <input type="checkbox" value={item}/>
                    {item}              
                </label>
            </li>

            )
        }))
    }
    
    return(
        <tr className="filter-row">
            <th>
                <ul>
                    {outputList[0]}
                </ul>    
            </th>
            <th>
                <ul>
                    {outputList[1]}
                </ul>    
            </th>
            <th>
                <ul>
                    {outputList[2]}
                </ul>    
            </th>
            <th>
                <ul>
                    {outputList[3]}
                </ul>    
            </th>
        </tr>
    )
}

export default FilterBar
