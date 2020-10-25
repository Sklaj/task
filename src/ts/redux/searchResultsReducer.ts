import {IVideo} from "../actions/fetchVideos";

export interface ISearchResults {
    searchResults: IVideo[] | null
}

const searchResultsInitialState = {
    searchResults: null
}

export const searchResultsReducer = function (results = searchResultsInitialState, action: any) {
    switch (action.type) {
        case "UPDATE":
            return {
                searchResults: action.data
            };
        default:
            return results;
    }
}
