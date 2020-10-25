import {combineReducers} from 'redux'
import {ISearch, searchReducer} from "./ts/redux/searchReducer";
import {
    ISearchResultsStatus,
    searchResultsReducer,
    searchResultsStatus
} from "./ts/redux/searchResultsReducer";
import {IVideo} from "./ts/actions/fetchVideos";
import {ISelectedVideo, selectedVideoReducer} from "./ts/redux/selectedVideoReducer";

//Main Reducer
export interface IStore {
    searchForm: ISearch;
    searchResults: IVideo[] | null;
    searchResultsStatus: ISearchResultsStatus;
    selectedVideo: ISelectedVideo;
}

export const mainReducer = combineReducers({
    searchForm: searchReducer,
    searchResults: searchResultsReducer,
    searchResultsStatus: searchResultsStatus,
    selectedVideo: selectedVideoReducer
});
