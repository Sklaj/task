import * as React from "react";
import {useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {map} from "lodash";

export const Sidebar = () => {

    const searchResults = useSelector((store: IStore) => store.searchResults);
    const searchResultsStatus = useSelector((store: IStore) => store.searchResultsStatus);

    console.log("Status:", searchResultsStatus, "results", searchResults);

    if (searchResultsStatus === null) {
        return (
            <div>Najpierw wyszukaj wideo</div>
        );
    }

    if (searchResultsStatus.status === "pending") {
        return (
            <div>
                Loading
            </div>
        )
    }

    if (searchResultsStatus.status === "failed") {
        return (
            <div>
                Błąd wyszukiwania
            </div>
        )
    }

    if (searchResultsStatus.status === "success") {
        return (
            <aside>
                {map(searchResults, (item, idx) => {
                    return (
                        <div key={idx}>
                            <img src={item.snippet.thumbnails.medium.url} width={item.snippet.thumbnails.medium.width} height={item.snippet.thumbnails.medium.height}/>
                        </div>
                    )
                })}
            </aside>
        )
    }

    return null;
};
