import React from "react";
import SongList from "./SongList";
import SortButtons from "./SortButtons";

const List = () => {
    return (
        <>
            <table className="list-table">
                <tbody>
                    <tr className="list-header">  
                        <th className="list-header-item">
                            Title <br/>
                            <SortButtons type="title"/>
                        </th>
                        <th className="list-header-item">
                            Artist <br/>
                            <SortButtons type="artist"/>
                        </th>
                        <th className="list-header-item">
                            Genre <br/>
                            <SortButtons type="genre"/>
                        </th>
                        <th className="list-header-item">
                            Rating <br/>
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