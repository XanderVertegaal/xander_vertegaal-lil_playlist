import React from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "../actions";

const DeleteButton = (props) => {
    const dispatch = useDispatch();

    const clickHandler = (event) => {
        dispatch(deleteSong(event.target.id))
    }
    
    return (
        <button id={props.id} onClick={clickHandler}>
            Delete
        </button>
    )
}

export default DeleteButton