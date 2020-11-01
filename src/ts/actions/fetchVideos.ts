import {Dispatch} from "redux";
import {replace} from "lodash";

interface IVideoThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface IVideo {
    kind: "youtube#searchResult";
    etag: string;
    id: {
        "videoId": string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            default: IVideoThumbnail;
            high: IVideoThumbnail;
            medium: IVideoThumbnail;
        }
    }
}

export const fetchVideos = (dispatch: Dispatch, searchPhrase: string) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyD1pwpBzsvU_o3WJuBfO35Z-dIzz9Lxl_c";
    const pageSize = 1;
    const phrase = replace(searchPhrase, " ", "+");
    const searchUrl = `/search?&fields=items(id(videoId),snippet(title,description,thumbnails(medium)))&part=snippet&type=video&videoCaption=closedCaption&videoEmbeddable=true&q=${phrase}&maxResults=${pageSize}&key=${apiKey}`
    const url = `${baseUrl}${searchUrl}`

    console.log(url);

    dispatch({type: "results/PENDING"})

    fetch(url)
        .then((res: any) => res.json())
        .then((res) => {
            dispatch({type: "results/UPDATE", data: res.items})
            dispatch({type: "results/SUCCESS"})
        })
        .catch((err) => {
            console.log(err);
            dispatch({type: "results/FAILED"});
        });
}
