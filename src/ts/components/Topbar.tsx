import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {fetchVideos} from "../actions/fetchVideos";
import {useEffect} from "react";

export const Topbar = () => {
    const dispatch = useDispatch();
    const formValues = useSelector((store: IStore) => store.searchForm);
    const searchResults = useSelector((store: IStore) => store.searchResults);

    const onSearchValueChange = (value: string) => {
        dispatch({type: "UPDATE_FORM", searchValue: value});
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
        fetchVideos(dispatch);
    }

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);


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
