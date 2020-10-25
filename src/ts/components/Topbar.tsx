import * as React from "react";
// import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";

export const Topbar = () => {

    const dispatch = useDispatch();
    const formValues = useSelector((store: IStore) => store.searchForm);

    // const [search, setSearch] = useState("");

    // console.log(search);

    const onSearchValueChange = (value: string) => {

        const action = {
            type: "UPDATE_FORM",
            searchValue: value
        }

        dispatch(action);
    }

    console.log(formValues);

    return (
        <header>
            <form>
                <input onChange={(e) => onSearchValueChange(e.target.value)}/>

                <button type="submit">
                    Szukaj
                </button>
            </form>
        </header>
    )
};
