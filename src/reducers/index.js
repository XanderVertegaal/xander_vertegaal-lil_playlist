import { combineReducers } from "redux";
import updateInput from "./updateInput";
import updateSongList from "./updateSongList";
import updateSorting from "./updateSorting";
import updateFilter from "./updateFilter";

const rootReducer = combineReducers({
    currentInput: updateInput,
    songList: updateSongList,
    sortingMethod: updateSorting,
    currentFilter: updateFilter
})

export default rootReducer