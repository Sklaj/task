export interface ISelectedVideo {
    selectedVideo: string;
}

const searchInitialState = {
    selectedVideo: ""
}

export const selectedVideoReducer = function (selectedVideo = searchInitialState, action: any) {
    switch (action.type) {
        case "UPDATE":
            return {
                selectedVideo: action.data
            };
        default:
            return selectedVideo;
    }
}
