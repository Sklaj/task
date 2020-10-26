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
        "kind": string;
        "videoId": string;
        "channelId": string;
        "playlistId": string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: IVideoThumbnail;
            high: IVideoThumbnail;
            medium: IVideoThumbnail;
        },
        channelTitle: string;
        liveBroadcastContent: string;
    }
}

export const fetchVideos = (dispatch: Dispatch, searchPhrase: string) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyDQrJvjYBJlX4Yk5V3XivqBJ8Du53zCjGw";
    const pageSize = 20;
    const phrase = replace(searchPhrase, " ", "+");
    const searchUrl = `/search?part=snippet&type=video&videoCaption=closedCaption&videoEmbeddable=true&q=${phrase}&maxResults=${pageSize}&key=${apiKey}`
    const url = `${baseUrl}${searchUrl}`

    dispatch({type: "PENDING"})

    fetch(url)
        .then((res: any) => res.json())
        .then((res) => {
            dispatch({type: "results/UPDATE", data: res.items})
            dispatch({type: "SUCCESS"})
        })
        .catch(() => {
            dispatch({type: "FAILED"})
        })
}
