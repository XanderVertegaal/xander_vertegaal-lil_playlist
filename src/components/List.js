import React from "react";
import SongList from "./SongList";

const List = () => {
    return (
        <>
            <table style={{width: "100%"}} className="list-header">
                <tbody>
                    <tr className="song-header">  
                        <th className="list-header-item">Title</th>
                        <th className="list-header-item">Artist</th>
                        <th className="list-header-item">Genre</th>
                        <th className="list-header-item">Rating</th>
                        <th className="list-header-item"></th>
                    </tr>
                    <SongList />
                </tbody>
            </table>
            
        </>
    )
}

export default List