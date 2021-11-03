import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";
import img5Stars from "../images/5-stars.png"
import img4Stars from "../images/4-stars.png"
import img3Stars from "../images/3-stars.png"
import img2Stars from "../images/2-stars.png"
import img1Stars from "../images/1-stars.png"

const SongList = () => {
    const currSongList = useSelector(state => state.songList)
    
    const currFilter = useSelector(state => state.currentFilter)
    
    const filteredSongs = currSongList.filter(item => (
        currFilter.title.includes(item.title) &&
        currFilter.artist.includes(item.artist) &&
        currFilter.genre.includes(item.genre) &&
        currFilter.rating.includes(item.rating)
    ))
    
    const getStarImage = (rating) => {
        switch (rating) {
            case 1:
                return img1Stars
            case 2:
                return img2Stars
            case 3:
                return img3Stars
            case 4:
                return img4Stars
            case 5:
                return img5Stars
            default:
                break;
        }
    }


    const songItems = filteredSongs.map(item => {
        return (
            <tr className="item-row" id={item.id} key={item.id}>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.genre}</td>
                <td><img 
                    src={getStarImage(item.rating)} width="100px"
                    alt={`${item.rating} star rating`}/></td>
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