import {combineReducers} from 'redux'
import {ISearch, searchReducer} from "./ts/redux/searchReducer";
import {searchResultsReducer} from "./ts/redux/searchResultsReducer";
import {IVideo} from "./ts/actions/fetchVideos";

//Main Reducer
export interface IStore {
    searchForm: ISearch;
    searchResults: IVideo[];
}

export const mainReducer = combineReducers({
    searchForm: searchReducer,
    searchResults: searchResultsReducer
});
