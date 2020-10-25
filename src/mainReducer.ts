import {combineReducers} from 'redux'
import {ISearch, searchReducer} from "./ts/redux/searchReducer";

//Main Reducer
export interface IStore {
    searchForm: ISearch
}

export const mainReducer = combineReducers({
    searchForm: searchReducer
});
