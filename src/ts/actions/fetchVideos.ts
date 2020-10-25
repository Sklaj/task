import {Dispatch} from "redux";

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

interface IVideosResponse {
    kind: "youtube#searchListResponse";
    etag: string;
    nextPageToken: string;
    prevPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: IVideo[];
}

export const fetchVideos = (dispatch: Dispatch) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyBxI-4ZJ9ATtGpDPuxcx8LfIIQQEvPGYdQ";
    const pageSize = 20;
    const searchUrl_2 = `/search?part=snippet&q=funny+cats&type=video&videoCaption=closedCaption&videoEmbeddable=true&maxResults=${pageSize}&key=${apiKey}`
    const url = `${baseUrl}${searchUrl_2}`

    fetch(url)
        .then((res: any) => res.json())
        .then((res) => {
            dispatch({type: "UPDATE", data: res.items})
        })
}
