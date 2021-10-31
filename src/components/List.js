import React from "react";
import SongList from "./SongList";

const List = () => {
    return (
        <>
            <table style={{width: "100%"}} className="list-header">
                <tr className="song-header">  
                    <th className="list-header-item">Song</th>
                    <th className="list-header-item">Artist</th>
                    <th className="list-header-item">Genre</th>
                    <th className="list-header-item">Rating</th>
                </tr>
            </table>
            <SongList />
        </>
    )
}

export default List