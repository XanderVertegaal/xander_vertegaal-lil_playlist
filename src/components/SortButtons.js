import React from "react";
import { useDispatch } from "react-redux";
import { sortTitle, sortArtist, sortGenre, sortRating } from "../actions";

const SortButtons = (props) => {

    const dispatch = useDispatch();

    const sortHandler = (event) => {
        switch (event.target.id) {
            case "sort-title-ascending":
                dispatch(sortTitle('ascending'))
            break
            case "sort-title-descending":
                dispatch(sortTitle('descending'))
            break
            case "sort-artist-ascending":
                dispatch(sortArtist('ascending'))
            break
            case "sort-artist-descending":
                dispatch(sortArtist('descending'))
            break
            case "sort-genre-ascending":
                dispatch(sortGenre('ascending'))
            break
            case "sort-genre-descending":
                dispatch(sortGenre('descending'))
            break
            case "sort-rating-ascending":
                dispatch(sortRating('ascending'))
            break
            case "sort-rating-descending":
                dispatch(sortRating('descending'))
            break
            default:
                break
        }
    }

    return (
        <>
            <button 
                id={`sort-${props.type}-ascending`} 
                className='sort-button' 
                onClick={sortHandler}
            >
                🠕
            </button>
            <button 
                id={`sort-${props.type}-descending`} 
                className='sort-button' 
                onClick={sortHandler}
            >
                🠗
            </button>
        </>
    )
}

export default SortButtons
