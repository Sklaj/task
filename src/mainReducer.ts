import {combineReducers} from 'redux'
import {ISearch, searchReducer} from "./ts/redux/searchReducer";
import {
    ISearchResults,
    ISearchResultsStatus,
    searchResultsReducer,
    searchResultsStatus
} from "./ts/redux/searchResultsReducer";
import {ISelectedVideo, selectedVideoReducer} from "./ts/redux/selectedVideoReducer";

//Main Reducer
export interface IStore {
    searchForm: ISearch;
    searchResults: ISearchResults;
    searchResultsStatus: ISearchResultsStatus;
    selectedVideo: ISelectedVideo;
}

export const mainReducer = combineReducers({
    searchForm: searchReducer,
    searchResults: searchResultsReducer,
    searchResultsStatus: searchResultsStatus,
    selectedVideo: selectedVideoReducer
});
