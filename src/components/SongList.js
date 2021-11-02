import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const SongList = () => {
    const currSongList = useSelector(state => state.songList)
    
    const currFilter = useSelector(state => state.currentFilter)
    
    const filteredSongs = currSongList.filter(item => (
        currFilter.title.includes(item.title) &&
        currFilter.artist.includes(item.artist) &&
        currFilter.genre.includes(item.genre) &&
        currFilter.rating.includes(item.rating)
    ))
    
    console.log('Filtered songlist:', filteredSongs)
    console.log('Current Filter:', currFilter)
    const songItems = filteredSongs.map(item => {
        return (
            <tr className="item-row" id={item.id} key={item.id}>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.genre}</td>
                <td>{item.rating}</td>
                <td>
                    <DeleteButton 
                        id={`btn-${item.id}`}
                    />
                </td>
            </tr>
        )
    })

    return songItems
}

export default SongList