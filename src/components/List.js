import React from "react";
import SongList from "./SongList";
import SortButtons from "./SortButtons";

const List = () => {
    return (
        <>
            <table style={{width: "100%"}} className="list-header">
                <tbody>
                    <tr className="song-header">  
                        <th className="list-header-item">
                            Title
                            <SortButtons type="title"/>
                        </th>
                        <th className="list-header-item">
                            Artist
                            <SortButtons type="artist"/>
                        </th>
                        <th className="list-header-item">
                            Genre
                            <SortButtons type="genre"/>
                        </th>
                        <th className="list-header-item">
                            Rating
                            <SortButtons type="rating"/>
                        </th>
                        <th className="list-header-item"></th>
                    </tr>
                    <SongList />
                </tbody>
            </table>
            
        </>
    )
}

export default List