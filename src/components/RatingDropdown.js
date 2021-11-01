import React from "react";
import { useSelector } from "react-redux";

const RatingDropdown = (props) => {
    const inputRating = useSelector(state => state.rating)

    return (
        <select
            id="input-rating"
            onChange={props.onNewValue}
            value={inputRating}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    )
}

export default RatingDropdown