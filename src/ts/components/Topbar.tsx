import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {fetchVideos} from "../actions/fetchVideos";

export const Topbar = () => {
    const dispatch = useDispatch();
    const formValues = useSelector((store: IStore) => store.searchForm);

    const onSearchValueChange = (value: string) => {
        dispatch({type: "UPDATE_FORM", searchValue: value});
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchVideos(dispatch, formValues.searchValue);
    }

    return (
        <header>
            <form onSubmit={(e) => onSubmit(e)}>
                <input onChange={(e) => onSearchValueChange(e.target.value)}/>

                <button type="submit">
                    Szukaj
                </button>
            </form>
        </header>
    )
};
