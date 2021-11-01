import { combineReducers } from "redux";
import updateInput from "./updateInput";
import updateSongList from "./updateSongList";
import updateSorting from "./updateSorting";

const rootReducer = combineReducers({
    updateInput,
    updateSongList,
    updateSorting
})

export default rootReducer