import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {map} from "lodash";

export const Sidebar = () => {
    const searchResults = useSelector((store: IStore) => store.searchResults.results);
    const searchResultsStatus = useSelector((store: IStore) => store.searchResultsStatus);
    const dispatch = useDispatch();

    console.log(searchResults);

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
                        <div key={idx} onClick={() => dispatch({type: "selected/UPDATE", data: item.id.videoId})}>
                            <img src={item.snippet.thumbnails.medium.url} width={item.snippet.thumbnails.medium.width} height={item.snippet.thumbnails.medium.height} alt={item.id.videoId}/>
                        </div>
                    )
                })}
            </aside>
        )
    }

    return null;
};
