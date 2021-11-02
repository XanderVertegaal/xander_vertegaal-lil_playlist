import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const SongList = () => {
    const currSongList = useSelector(state => state.updateSongList)
    const songItems = currSongList.map(item => (
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
    ))
    return songItems
}

export default SongList