import {IVideo} from "../actions/fetchVideos";

export interface ISearchResults {
    results: IVideo[] | null
}

const searchResultsInitialState = {
    results: null
}

export const searchResultsReducer = function (results: ISearchResults = searchResultsInitialState, action: any) {
    switch (action.type) {
        case "results/UPDATE":
            return {
                results: action.data
            };
        default:
            return results;
    }
}

export interface ISearchResultsStatus {
    status: null | "pending" | "success" | "failed";
}

const searchResultsStatusInitialState = null;

export const searchResultsStatus = function (status = searchResultsStatusInitialState, action: any) {
    switch (action.type) {
        case "PENDING":
            return {
                status: "pending"
            };
        case "SUCCESS":
            return {
                status: "success"
            };
        case "FAILED":
            return {
                status: "failed"
            };
        default:
            return status;
    }
}
