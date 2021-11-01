import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const SongList = (props) => {
    const currSongList = useSelector(state => state.updateSongList)
    const songItems = currSongList.map(item => (
        <tr className="item-row" id={item.id} key={item.id}>
            <th>{item.title}</th>
            <th>{item.artist}</th>
            <th>{item.genre}</th>
            <th>{item.rating}</th>
            <th>
                <DeleteButton 
                    id={`btn-${item.id}`}
                />
            </th>
        </tr>
    ))

    return songItems
}

export default SongList